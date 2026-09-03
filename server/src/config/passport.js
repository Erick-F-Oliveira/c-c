import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import * as dotenv from "dotenv";
import User from "../models/user.model.js";
import logger from "../utils/logger.js";
import { discordAuthSchema, googleAuthSchema } from "../schemas/user.schema.js";

dotenv.config();

const passportConfig = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  passport.use(
    new DiscordStrategy(
      {
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: process.env.DISCORD_REDIRECT_URI,
        scope: ["identify", "email"],
      },

      async (accessToken, refreshToken, profile, done) => {
        const rawData = {
          discordId: profile.id,
          username: profile.username,
          email: profile.email,
          avatar: profile.avatar || "",
        };
        const validation = discordAuthSchema.safeParse(rawData);

        if (!validation.success) {
          logger.superError("Falha de validação Discord:", validation.error);
          return done(new Error("Invalid user data"), null);
        }

        try {
          const valid = validation.data;
          const user = await User.findOneAndUpdate(
            { discordId: valid.discordId },
            {
              $set: {
                discordId: valid.discordId,
                discordUsername: valid.username,
                discordAvatar: valid.avatar,
                email: valid.email,
              },
              $setOnInsert: {
                username: valid.username,
                avatar: valid.avatar,
              },
            },
            { upsert: true, returnDocument: "after" },
          );

          return done(null, user);
        } catch (err) {
          logger.superError(`Erro no banco (Discord): ${err.message}`);
          return done(err, null);
        }
      },
    ),
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URI,
        scope: ["profile", "email", "openid"],
      },
      async (accessToken, refreshToken, profile, done) => {
        const rawData = {
          googleId: profile.id,
          username: profile.displayName || profile.name?.givenName || "",
          avatar: profile.photos?.[0]?.value || "",
          email: profile.emails?.[0]?.value,
        };

        const validation = googleAuthSchema.safeParse(rawData);

        if (!validation.success) {
          logger.error("Falha de validação Google:", validation.error);
          return done(validation.error, null);
        }

        try {
          const valid = validation.data;

          const user = await User.findOneAndUpdate(
            { googleId: valid.googleId },
            {
              $set: {
                googleId: valid.googleId,
                googleUsername: valid.username,
                googleAvatar: valid.avatar,
                email: valid.email,
              },
              $setOnInsert: {
                username: valid.username,
                avatar: valid.avatar,
              },
            },
            { upsert: true, returnDocument: "after" },
          );

          return done(null, user);
        } catch (err) {
          logger.error(`Erro no banco (Google): ${err.message}`);
          return done(err, null);
        }
      },
    ),
  );
};

export default passportConfig;

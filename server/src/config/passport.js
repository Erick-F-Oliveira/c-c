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

  //DISCORD
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
          avatar: profile.avatar || "",
          email: profile.email,
        };

        const validation = discordAuthSchema.safeParse(rawData);
        if (!validation.success) {
          logger.error("Falha de validação Discord:", validation.error);
          return done(new Error("Dados de usuário inválidos"), null);
        }

        try {
          const valid = validation.data;

          let user = await User.findOne({
            $or: [
              { discordId: valid.discordId },
              ...(valid.email ? [{ email: valid.email }] : []),
            ],
          });

          if (user) {
            user.discordId = valid.discordId;
            user.discordUsername = valid.username;
            user.discordAvatar = valid.avatar;
            // Mantém o e-mail original se ele já tinha um
            if (!user.email && valid.email) user.email = valid.email;

            await user.save();
            return done(null, user);
          }

          user = await User.create({
            discordId: valid.discordId,
            discordUsername: valid.username,
            discordAvatar: valid.avatar,
            username: valid.username,
            avatar: valid.avatar,
            email: valid.email,
          });

          return done(null, user);
        } catch (err) {
          logger.error(`Erro no banco (Discord): ${err.message}`);
          return done(err, null);
        }
      },
    ),
  );

  // GOOGLE
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

          let user = await User.findOne({
            $or: [
              { googleId: valid.googleId },
              { email: valid.email }, // Google sempre fornece e-mail
            ],
          });

          if (user) {
            user.googleId = valid.googleId;
            user.googleUsername = valid.username;
            user.googleAvatar = valid.avatar;

            await user.save();
            return done(null, user);
          }

          user = await User.create({
            googleId: valid.googleId,
            googleUsername: valid.username,
            googleAvatar: valid.avatar,
            username: valid.username,
            avatar: valid.avatar,
            email: valid.email,
          });

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

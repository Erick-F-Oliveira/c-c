import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import * as dotenv from "dotenv";
import User from "../models/user.model.js";
import logger from "../utils/logger.js";

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
        logger.success(`O processo de autenticação funcionou.`);

        try {
          const user = await User.findOneAndUpdate(
            { discordId: profile.id },
            {
              discordId: profile.id,
              username: profile.username,
              avatar: profile.avatar || "",
              email: profile.email,
            },
            { upsert: true, returnDocument: "after" },
          );

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      },
    ),
  );
};

export default passportConfig;

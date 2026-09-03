import { model, Schema } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz",
  16,
);
let userSchema = new Schema(
  {
    //Geral
    userId: { type: String, required: true, unique: true },
    username: {
      type: String,
      required: true,
      default: () => `usr_${nanoid()}`,
      immutable: true,
    },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: "" },
    //Discord
    discordId: String,
    discordUsername: String,
    discordAvatar: String,
    //Google
    googleId: String,
    googleUsername: String,
    googleAvatar: String,
  },
  { timestamps: true },
);
const User = model("user", userSchema);
export default User;

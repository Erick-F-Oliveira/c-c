import { model, Schema } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz",
  16,
);
let userSchema = new Schema(
  {
    //Geral
    userId: {
      type: String,
      required: true,
      unique: true,
      default: () => `usr_${nanoid()}`,
      immutable: true,
    },
    username: {
      type: String,
      required: true,
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
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});
const User = model("user", userSchema);
export default User;

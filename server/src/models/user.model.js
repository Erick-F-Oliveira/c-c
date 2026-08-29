import { model, Schema } from "mongoose";

let userSchema = new Schema(
  {
    discordId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  { timestamps: true },
);
const User = model("user", userSchema);
export default User;

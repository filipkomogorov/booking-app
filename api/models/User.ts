import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = model("User", UserSchema);

export default User;

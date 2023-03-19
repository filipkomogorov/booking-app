import mongoose, { Schema, model } from "mongoose";
import { User as UserRoles } from "../enums/User.enum";

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {type: String, enum: UserRoles, required: false}
});

const User = model("User", UserSchema);

export default User;

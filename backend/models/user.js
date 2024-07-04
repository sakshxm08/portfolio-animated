import mongoose from "mongoose";
import db from "../db/db.js";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default db.model("user", userSchema);

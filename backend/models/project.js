import mongoose from "mongoose";
import db from "../db/db.js";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  githubUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  techStack: { type: [{ name: String, logo: String }], required: true },
});

export default db.model("project", projectSchema);

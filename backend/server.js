import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projects.js";
import authRoutes from "./routes/auth.js";
import db from "./db/db.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

db.once("open", () => {
  app.listen(3000, () => {
    console.log("Server running.");
  });
});

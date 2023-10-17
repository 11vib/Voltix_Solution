require('dotenv').config();
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectsRoutes";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
const mongoURI = process.env.MONGO;
// Connect to MongoDB
mongoose.connect("mongoURI").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Use projectRoutes
app.use("/api", projectRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

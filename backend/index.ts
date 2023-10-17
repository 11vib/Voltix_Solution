import * as dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
// require('dotenv').config();
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
const mongoURI = process.env.MONGO ;
// Connect to MongoDB
mongoose.connect(mongoURI as string).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Use projectRoutes
app.use("/papi", projectRoutes);
// Use serviceRoutes
app.use("/sapi",serviceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

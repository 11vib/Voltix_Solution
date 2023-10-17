import * as dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
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

// Use Routes
app.use("/papi", projectRoutes);
app.use("/sapi",serviceRoutes);
app.use("/tapi",testimonialRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

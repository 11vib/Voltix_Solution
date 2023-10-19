import * as dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import contactRoutes from "./routes/contactRoutes";
import { registerUser, loginUser, refreshToken } from './controllers/userController';


dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
const mongoURI = process.env.MONGO ;

mongoose.connect(mongoURI as string).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Use Routes
app.use("/papi", projectRoutes);
app.use("/sapi",serviceRoutes);
app.use("/tapi",testimonialRoutes);
app.use("/capi",contactRoutes)
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.post('/api/refresh', refreshToken);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNGUwN2ViNWM2NTY5MWNmZTA4MjIiLCJpYXQiOjE2OTc1OTg5ODMsImV4cCI6MTY5NzYwMjU4M30.UNc8p3WGp2Nj_PYYZ9i-Rx8lWx7cOQKiqdtkupXHro0"
//   {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNGUwN2ViNWM2NTY5MWNmZTA4MjIiLCJpYXQiOjE2OTc1OTkwNTMsImV4cCI6MTY5NzYwMjY1M30.gvCwnt0FqCnLnIAyIwVvwZ73mciRWquROSw2_9qmx84"
// }
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNTA3Nzc2YmQ1N2Q4ZjRkZjQ4YzYiLCJpYXQiOjE2OTc1OTk2MDcsImV4cCI6MTY5NzYwMzIwN30.IEoQy3pVzyb3RqrIozdhFMhrEsbILnqCFihHmCqjxEs"



// accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNTIyMTc2YzI0MjYyMjEzMGU5OWQiLCJpYXQiOjE2OTc2MDAwMzMsImV4cCI6MTY5NzYwMDkzM30.pXra3YAOwcmybWaNDd7I3FExSRNI-c3aA36ii6-aAgA"


// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNTIyMTc2YzI0MjYyMjEzMGU5OWQiLCJpYXQiOjE2OTc2MDAwNDksImV4cCI6MTY5NzYwMDk0OX0.PIdV2EtAO67K_0GgZ66983tRbnSCalS_gm3dCwz_liA",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNTIyMTc2YzI0MjYyMjEzMGU5OWQiLCJpYXQiOjE2OTc2MDAwNDksImV4cCI6MTY5ODIwNDg0OX0.XNVdO3uIutwPEWCo7UumosqBjRlRXg2NV6EJQI7WUcw"
// }



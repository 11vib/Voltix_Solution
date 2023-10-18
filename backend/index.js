"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const servicesRoutes_1 = __importDefault(require("./routes/servicesRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const userController_1 = require("./controllers/userController");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
const mongoURI = process.env.MONGO;
mongoose_1.default.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});
// Use Routes
app.use("/papi", projectsRoutes_1.default);
app.use("/sapi", servicesRoutes_1.default);
app.use("/tapi", testimonialRoutes_1.default);
app.use("/capi", contactRoutes_1.default);
app.post('/api/register', userController_1.registerUser);
app.post('/api/login', userController_1.loginUser);
app.post('/api/refresh', userController_1.refreshToken);
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

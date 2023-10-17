"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
const mongoURI = process.env.MONGO;
// Connect to MongoDB
mongoose_1.default.connect("mongoURI").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});
// Use projectRoutes
app.use("/api", projectsRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

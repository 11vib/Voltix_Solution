import express from "express";
import * as projectController from "../controllers/projectsController";
const prouter = express.Router();

prouter.get("/projects", projectController.getAllProjects);
prouter.get("/projects/:id", projectController.getProjectById);
export default prouter;


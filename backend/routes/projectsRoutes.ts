import express from "express";
import * as projectController from "../controllers/projectsController";
import { verifyAccessToken } from "../Auth/auth";
const prouter = express.Router();

prouter.get("/projects/:id", projectController.getProjectById);
prouter.get("/projects", projectController.getAllProjects);
prouter.get("/projects/title/:title",projectController.getProjectByTitle);
prouter.post("/projects/create",verifyAccessToken,projectController.createProject);
prouter.put("/projects/update/:id",verifyAccessToken,projectController.updateProject)
prouter.delete("/projects/delete/:id",verifyAccessToken,projectController.deleteProject)

export default prouter;
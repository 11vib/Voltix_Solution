import express from "express";
import * as projectController from "../controllers/projectsController";
const prouter = express.Router();

prouter.get("/projects/:id", projectController.getProjectById);
prouter.get("/projects", projectController.getAllProjects);
prouter.get("/projects/title/:title",projectController.getProjectByTitle);


export default prouter;


import { Request, Response } from "express";
import ProjectModel from "../models/projectsModel";

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const project = await ProjectModel.findById(projectId);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// // Create a new project
// export const createProject = async (req: Request, res: Response) => {
//     try {
//       const projectData = req.body;
//       const createdProject = await ProjectModel.create(projectData);
//       res.status(201).json(createdProject);
//     } catch (err) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };
  
//   // Update an existing project
//   export const updateProject = async (req: Request, res: Response) => {
//     try {
//       const projectId = req.params.id;
//       const projectData = req.body;
//       const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, projectData, { new: true });
  
//       if (updatedProject) {
//         res.status(200).json(updatedProject);
//       } else {
//         res.status(404).json({ error: "Project not found" });
//       }
//     } catch (err) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };
  
  
//   // Delete a project
//   export const deleteProject = async (req: Request, res: Response) => {
//     try {
//       const projectId = req.params.id;
//       const deletedProject = await ProjectModel.findByIdAndDelete(projectId);
  
//       if (deletedProject) {
//         res.status(204).send(); // 204 No Content (successful deletion)
//       } else {
//         res.status(404).json({ error: "Project not found" });
//       }
//     } catch (err) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };
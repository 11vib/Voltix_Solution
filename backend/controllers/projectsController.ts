import { Request, Response , NextFunction} from "express";
import { verifyAccessToken } from '../Auth/auth'; // access token verification middleware
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

export const getProjectByTitle = async (req: Request, res: Response) => {
    try {
      const project_title = req.params.title;
      const project = await ProjectModel.findOne({ project_title: project_title });
  
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: "Project not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
      console.log(err);
    }
  };
  
  // // Create a new project
  // export const createProject = [verifyAccessToken, async (req: Request, res: Response) => {
  //   // The user is authenticated, continue with creating the project
  //   try {
  //     const projectData = req.body;
  //     const createdProject = await ProjectModel.create(projectData);
  //     res.status(201).json(createdProject);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // }];
  
  // // Update an existing project
  // export const updateProject = [verifyAccessToken, async (req: Request, res: Response) => {
  //   // The user is authenticated, continue with updating the project
  //   try {
  //     const projectId = req.params.id;
  //     const projectData = req.body;
  //     const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, projectData, { new: true });
  
  //     if (updatedProject) {
  //       res.status(200).json(updatedProject);
  //     } else {
  //       res.status(404).json({ error: "Project not found" });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // }];
  
  // // Delete a project
  // export const deleteProject = [verifyAccessToken, async (req: Request, res: Response) => {
  //   // The user is authenticated, continue with deleting the project
  //   try {
  //     const projectId = req.params.id;
  //     const deletedProject = await ProjectModel.findByIdAndDelete(projectId);
  
  //     if (deletedProject) {
  //       res.status(204).send(); // 204 No Content (successful deletion)
  //     } else {
  //       res.status(404).json({ error: "Project not found" });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // }];
  

  export const createProject = [verifyAccessToken, async (req: Request, res: Response) => {
    try {
      const projectData = req.body;
      const createdProject = await ProjectModel.create(projectData);
      res.status(201).json(createdProject);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }];
  export const updateProject = [verifyAccessToken, async (req: Request, res: Response) => {
    try {
      const projectId = req.params.id;
      const projectData = req.body;
      const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, projectData, { new: true });
  
      if (updatedProject) {
        res.status(200).json(updatedProject);
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }];

  export const deleteProject = [verifyAccessToken,  async (req: Request, res: Response) => {
    try {
      const projectId = req.params.id;
      const deletedProject = await ProjectModel.findByIdAndDelete(projectId);
  
      if (deletedProject) {
        res.status(204).send(); // 204 No Content (successful deletion)
      } else {
        res.status(404).json({ error: 'Project not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }];

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

  // "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNWNjN2FkMjI1YzBiYzdlMWMyNDgiLCJpYXQiOjE2OTc2MDI3ODIsImV4cCI6MTY5NzYwMzY4Mn0.r0ks07-Vj9Qkp0C0gx6ofn2VlN9HTKZSRUOFy5PCbNs",
  //   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTJmNWNjN2FkMjI1YzBiYzdlMWMyNDgiLCJpYXQiOjE2OTc2MDI3ODIsImV4cCI6MTY5ODIwNzU4Mn0.OvwPabyLbG_Daxg1L2RT76jqi1paY0NhAens6O9wwLM"

  
// import express from "express";
// import * as contactController from "../controllers/contactController";
// import * as projectController from "../controllers/projectsController";
// import { verifyAccessToken } from "../Auth/auth";
// import * as serviceController from "../controllers/servicesController";
// import * as testimonialController from "../controllers/testimonialsController";
// import { registerUser, loginUser, refreshToken ,  validateUserInput} from '../controllers/userController';
// const trouter = express.Router();
// const srouter = express.Router();
// const prouter = express.Router();
// const crouter = express.Router();
// const router = express.Router();

// crouter.post("/contact-entries", contactController.postContact);
// prouter.get("/projects/:id", projectController.getProjectById);
// prouter.get("/projects", projectController.getAllProjects);
// prouter.get("/projects/title/:title",projectController.getProjectByTitle);
// prouter.post("/projects/create",verifyAccessToken,projectController.createProject);
// prouter.put("/projects/update/:id",verifyAccessToken,projectController.updateProject);
// prouter.delete("/projects/delete/:id",verifyAccessToken,projectController.deleteProject);
// srouter.get("/services/:id", serviceController.getServiceById);
// srouter.get("/services", serviceController.getAllServices);
// srouter.get("/services/title/:title",serviceController.getServiceByTitle);
// trouter.get("/testimonials", testimonialController.getAllTestimonials);
// router.post('/register', validateUserInput, registerUser);
// router.post('/login',  validateUserInput,loginUser);
// router.post('/refresh',  validateUserInput,refreshToken);

// export default {crouter, prouter, srouter,trouter,router};
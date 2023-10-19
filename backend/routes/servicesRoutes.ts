import express from "express";
import * as serviceController from "../controllers/servicesController";
const s_router = express.Router();

s_router.get("/services/:id", serviceController.getServiceById);
s_router.get("/services", serviceController.getAllServices);
s_router.get("/services/title/:title", serviceController.getServiceByTitle);

export default s_router;

import express from "express";
import * as serviceController from "../controllers/servicesController";
const srouter = express.Router();

srouter.get("/services/:id", serviceController.getServiceById);
srouter.get("/services", serviceController.getAllServices);
srouter.get("/services/title/:title",serviceController.getServiceByTitle);


export default srouter;
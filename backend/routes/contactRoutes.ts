import express from "express";
import * as contactController from "../controllers/contactController";
const crouter = express.Router();

crouter.post("/contact-entries", contactController.postContact);


export default crouter;

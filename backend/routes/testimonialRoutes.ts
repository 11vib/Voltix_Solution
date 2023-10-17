import express from "express";
import * as testimonialController from "../controllers/testimonialsController";
const trouter = express.Router();

trouter.get("/testimonials", testimonialController.getAllTestimonials);


export default trouter;
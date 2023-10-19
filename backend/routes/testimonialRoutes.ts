import express from "express";
import * as testimonialController from "../controllers/testimonialsController";
const t_router = express.Router();

t_router.get("/testimonials", testimonialController.getAllTestimonials);

export default t_router;

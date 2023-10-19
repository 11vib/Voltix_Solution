import { Request, Response } from "express";
import { verifyAccessToken } from "../Auth/auth";
import TestimonialModel from "../models/testimonialsModel";

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await TestimonialModel.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
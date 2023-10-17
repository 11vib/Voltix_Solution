import mongoose, { Document, Model } from "mongoose";

// Define the interface for the Testimonial document
interface ITestimonial extends Document {
  testimonial_id: string;
  testimonial_author: string;
  testimonial_content: string;
  created_at: Date;
}

// Create the Mongoose schema for the Testimonial model
const testimonialsSchema = new mongoose.Schema<ITestimonial>({
  testimonial_id: { type: String, required: true, unique: true, trim: true },
  testimonial_author: { type: String, required: true },
  testimonial_content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

// Create and export the Testimonial model
const TestimonialModel: Model<ITestimonial> = mongoose.model<ITestimonial>("Testimonials", testimonialsSchema);
export default TestimonialModel;
import mongoose, { Document, Model } from "mongoose";

// Define the interface for the Testimonial document
interface ITestimonial extends Document {
  TestimonialId: string;
  TestimonialAuthor: string;
  TestimonialContent: string;
  createdAt: Date;
}

// Create the Mongoose schema for the Testimonial model
const testimonialsSchema = new mongoose.Schema<ITestimonial>({
  TestimonialId: { type: String, required: true, unique: true, trim: true },
  TestimonialAuthor: { type: String, required: true },
  TestimonialContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Testimonial model
const TestimonialModel: Model<ITestimonial> = mongoose.model<ITestimonial>("Testimonials", testimonialsSchema);
export default TestimonialModel;
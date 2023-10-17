import mongoose, { Document, Model } from "mongoose";

// Define the interface for the Service document
interface IService extends Document {
  service_id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  image_url: string;
  created_at: Date;
}

// Create the Mongoose schema for the Service model
const servicesSchema = new mongoose.Schema<IService>({
  service_id: { type: String, required: true, unique: true, trim: true },
  service_title: { type: String, required: true, unique: true, trim: true },
  service_description: { type: String, required: true },
  service_category: { type: String, required: true },
  image_url: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

// Create and export the Service model
const ServiceModel: Model<IService> = mongoose.model<IService>("Services", servicesSchema);
export default ServiceModel;
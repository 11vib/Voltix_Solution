import mongoose, { Document, Model} from "mongoose";

// Define the interface for the Project document
interface IProject extends Document {
  //project_id: string;
  project_title: string;
  project_description: string;
  project_category: string;
  image_url: string;
  created_at: Date;
}

// Create the Mongoose schema for the Project model
const projectsSchema = new mongoose.Schema<IProject>({
 // project_id: { type: String, required: true, unique: true, trim: true },
  project_title: { type: String, required: true, unique: true, trim: true },
  project_description: { type: String, required: true },
  project_category: { type: String, required: true },
  image_url: { type: String, required:true},
  created_at: { type: Date, default: Date.now },
});

// Create and export the Project model
const ProjectModel: Model<IProject> = mongoose.model<IProject>("Projects", projectsSchema);
export default ProjectModel;
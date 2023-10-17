"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create the Mongoose schema for the Project model
const projectsSchema = new mongoose_1.default.Schema({
    project_id: { type: String, required: true, unique: true, trim: true },
    project_title: { type: String, required: true, unique: true, trim: true },
    project_description: { type: String, required: true },
    project_category: { type: String, required: true },
    image_url: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
// Create and export the Project model
const ProjectModel = mongoose_1.default.model("Projects", projectsSchema);
exports.default = ProjectModel;

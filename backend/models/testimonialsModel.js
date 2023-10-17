"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create the Mongoose schema for the Testimonial model
const testimonialsSchema = new mongoose_1.default.Schema({
    TestimonialId: { type: String, required: true, unique: true, trim: true },
    TestimonialAuthor: { type: String, required: true },
    TestimonialContent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
// Create and export the Testimonial model
const TestimonialModel = mongoose_1.default.model("Testimonials", testimonialsSchema);
exports.default = TestimonialModel;

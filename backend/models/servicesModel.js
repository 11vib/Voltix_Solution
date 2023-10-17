"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create the Mongoose schema for the Service model
const servicesSchema = new mongoose_1.default.Schema({
    serviceId: { type: String, required: true, unique: true, trim: true },
    serviceTitle: { type: String, required: true, unique: true, trim: true },
    serviceDescription: { type: String, required: true },
    serviceCategory: { type: String, required: true },
    imageURL: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
// Create and export the Service model
const ServiceModel = mongoose_1.default.model("Services", servicesSchema);
exports.default = ServiceModel;

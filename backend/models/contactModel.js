"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    // contact_id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true },
    phone_no: { type: Number, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const ContactModel = mongoose_1.default.model("Contacts", contactSchema);
exports.default = ContactModel;

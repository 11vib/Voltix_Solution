import mongoose, { Document, Model } from "mongoose";

interface IContact extends Document {
  name: string;
  phone_no: Number;
  email: string;
  message: string;
  created_at: Date;
}

const contactSchema = new mongoose.Schema<IContact>({
  name: { type: String, required: true },
  phone_no: { type: Number, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const ContactModel: Model<IContact> = mongoose.model<IContact>(
  "Contacts",
  contactSchema
);
export default ContactModel;

import mongoose, { Schema, Document } from 'mongoose';

// Define the User schema
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define the User model
export interface IUser extends Document {
  username: string;
  password: string;
}

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

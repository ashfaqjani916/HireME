import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
}, { timestamps: true });


// Check if the model already exists, and if so, use that model; otherwise, create a new one.
export const User = mongoose.models.User || mongoose.model('User', userSchema);

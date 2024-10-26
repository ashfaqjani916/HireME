import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  groupID : { type: String,  unique: true },
  name: { type: String, required: true },
  description: { type: String },
  joinCode: { type: String, required: true, unique: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  jobPostings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting' }],
}, { timestamps: true });

export const Group = mongoose.model('Group', groupSchema);

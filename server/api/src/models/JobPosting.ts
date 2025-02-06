import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  deadline: { type: Date },
  compensation: { type: String },
  registrationLink: { type: String, required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  appliedStatus: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hasApplied: { type: Boolean, default: false },
  }],
}, { timestamps: true });

export const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

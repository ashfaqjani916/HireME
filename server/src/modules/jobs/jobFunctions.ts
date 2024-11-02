import { Request, Response } from "express";
import { JobPosting } from "../../models/JobPosting";


export const listJobPostings = async (req: Request, res: Response) => {
  console.log("/listJobPostings route is called");
  const { groupId } = req.params;

  try {
    const jobPostings = await JobPosting.find({ group: groupId });
    res.status(200).json(jobPostings);
  } catch (error) {
    console.error("Error listing job postings:", error);
    res.status(500).json({ error: "Could not retrieve job postings" });
  }
};


export const addJobPosting = async (req: Request, res: Response) => {
  console.log("/addJobPosting route is called");

  const { userId, companyName, deadline, compensation, registrationLink, groupId } = req.body;

  try {
    // Validate required fields
    if (!userId || !companyName || !deadline || !registrationLink || !groupId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a new job posting document
    const newJobPosting = new JobPosting({
      companyName,
      deadline,
      compensation,
      registrationLink,
      group: groupId,
      createdBy: userId,  // Mark the user who added the job as the creator
      appliedStatus: [],  // Initialize appliedStatus as an empty array
    });

    // Save the new job posting to the database
    await newJobPosting.save();
    res.status(200).json(newJobPosting);
  } catch (error) {
    console.error("Error adding job posting:", error);
    res.status(500).json({ error: "Could not add job posting" });
  }
};

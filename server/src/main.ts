import 'dotenv/config'
import express, {Request, Response} from 'express';
import cors from 'cors';  
import { connectdb } from './db/db';
//import { v4 as uuidv4 } from 'uuid';

import { User } from './models/User';
import {Group} from './models/Group';
import { JobPosting } from './models/JobPosting';
import axios from 'axios';
import {generateCode} from './utils/generateCode'
// import { sendEmail } from './utils/mailer';
// import { Types } from 'mongoose';
// var cron = require('node-cron');
const schedule = require('node-schedule');

const app = express();
app.use(cors());
app.use(express.json());


const port = 8080;

connectdb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// cron.schedule('* * * * * *', () => {
//   console.log('running a task every minute');
//   sendEmail({emailID:"  ", emailBody:" "});
// },{
//   timezone: "Asia/Kolkata"
// });



app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create user route
app.post('/createUser', async (req, res) => {
  console.log("/createUser route is called ")
  console.log(req.body);
  const newUser = new User({
    username: req.body.name,
    email: req.body.email,
  });
  
  await newUser.save();
  res.send(newUser)
});

//a route to check if the user exists
app.post('/checkUser', async (req, res) => {
  console.log("/checkUser route is called");
  console.log(req.body);
  const { email} = req.body;

  try {
    console.log(email);
    const user = await User.findOne({ email });

    if (user) {
      res.send(user);
    } else {
        axios.post(`${process.env.BACKEND_URL}/createUser`, req.body )
    }
  }
  catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ error: "Could not check user" });
  }

});

// a route to fetch all the groups
app.get('/get-user-groups/:email', async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email as string });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find all groups where the user is a member
    const groups = await Group.find({ members: user._id });

    res.json({ groups });
  } catch (error) {
    console.error('Error fetching user groups:', error);
    res.status(500).json({ error: 'An error occurred while fetching groups' });
  }
});


//create group route
app.post('/createGroup', async (req, res) => {
  console.log("/createGroup route is called");
  
  const { userId, name } = req.body;

  try {
    const newGroup = new Group({
      name,
      joinCode: generateCode(), // Generate a unique join code
      createdBy: userId,
      members: [userId],  // Add creator to the members list
    });

    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Could not create group" });
  }
});

//route to join the team 
app.post('/join-team', async (req, res) => {
  const { email, code } = req.body;

  try {
    // Check if the team with the given code exists
    const team = await Group.findOne({ joinCode: code });

    if (!team) {
      return res.status(404).json({ error: 'Invalid code. Team not found.' });
    }

    // Find the existing user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found. Please register first.' });
    }

    // Check if user is already part of the team
    if (team.members.includes(user._id)) {
      return res.status(400).json({ error: 'User is already a member of this team.' });
    }

    // Add user to the team's members array
    team.members.push(user._id);
    await team.save();

    res.json({ message: `User ${user.username} joined team: ${team.name}`, teamCode: code });
  } catch (error) {
    console.error('Error joining team:', error);
    res.status(500).json({ error: 'An error occurred while joining the team.' });
  }
});


//list job posting
app.get('/listJobPostings/:groupId', async (req, res) => {
  console.log("/listJobPostings route is called");
  const { groupId } = req.params;

  try {
    const jobPostings = await JobPosting.find({ group: groupId });
    res.status(200).json(jobPostings);
  } catch (error) {
    console.error("Error listing job postings:", error);
    res.status(500).json({ error: "Could not retrieve job postings" });
  }
});

//add a new job
app.post('/addJobPosting', async (req: Request, res: Response) => {
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
});




// //delete job posting 
// app.delete('/deleteJobPosting/:jobId', async (req, res) => {
//   console.log("/deleteJobPosting route is called");
//   const { jobId } = req.params;
//   const { userId } = req.body;

//   try {
//     const jobPosting = await JobPosting.findById(jobId);

//     // Check if the jobpositg exists
//     if (!jobPosting) {
//       return res.status(404).json({ error: "Job posting not found" });
//     }

  

//     if (jobPosting.createdBy.toString() !== userId) {
//       return res.status(403).json({ error: "Unauthorized to delete this job posting" });
//     }

//     await JobPosting.findByIdAndDelete(jobId);
//     res.status(200).json({ message: "Job posting deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting job posting:", error);
//     res.status(500).json({ error: "Could not delete job posting" });
//   }
// });


//delete a group
app.delete('/deleteGroup/:groupId', async (req, res) => {
  console.log("/deleteGroup route is called");
  const { groupId } = req.params;
  const { userId } = req.body;

  try {
    const group = await Group.findById(groupId);

    // Check if the group exists
    if (!group) {
    return res.status(404).json({ error: "Group not found" });
  }

    if (group.createdBy?.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized to delete this group" });
    }

    await Group.findByIdAndDelete(groupId);
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Could not delete group" });
  }
});

import 'dotenv/config'
import express from 'express';
import cors from 'cors';  
import { connectdb } from './db/db';
import { v4 as uuidv4 } from 'uuid';

import { User } from './models/User';
import {Group} from './models/Group';
import { JobPosting } from './models/JobPosting';
import axios from 'axios';
import {generateCode} from './utils/generateCode'

const app = express();
app.use(cors());
app.use(express.json());


const port = 3000;

connectdb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


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
  const { email} = req.body.email;

  try {
    const user = await User.findOne({}).where('email').equals(email);
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



//create group route
app.post('/createGroup', async (req, res) => {
  console.log("/createGroup route is called");
  
  const { userId, name, description } = req.body;

  try {
    const newGroup = new Group({
      name,
      description,
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


// Route to join a team by code
app.post('/join-team', async (req, res) => {
  const { username, code } = req.body;

  try {
      // Check if the code exists in the Code collection
      const team = await Group.findOne({}).where('joinCode').equals(code);

      if (!team) {
          return res.status(404).json({ error: 'Invalid code. Team not found.' });
      }

      // Create a new user and associate them with the team code
      const newUser = new User({ username: username, teamCode: code });
      await newUser.save();

      res.json({ message: `User ${username} joined team: ${team.name}`, teamCode: code });
  } catch (error) {
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


//update job posting 
// app.put('/updateJobPosting/:jobId', async (req, res) => {
//   console.log("/updateJobPosting route is called");
//   const { jobId } = req.params;
//   const { userId, ...updateData } = req.body;

//   try {
//     const jobPosting = await JobPosting.findById(jobId);

//     // Check if the jobpositg exists
//     if (!jobPosting) {
//       return res.status(404).json({ error: "Job posting not found" });
//     }

//     if (jobPosting.createdBy.toString() !== userId) {
//       return res.status(403).json({ error: "Unauthorized to update this job posting" });
//     }

//     const updatedJobPosting = await JobPosting.findByIdAndUpdate(jobId, updateData, { new: true });
//     res.status(200).json(updatedJobPosting);
//   } catch (error) {
//     console.error("Error updating job posting:", error);
//     res.status(500).json({ error: "Could not update job posting" });
//   }
// });


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

    if (group.createdBy.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized to delete this group" });
    }

    await Group.findByIdAndDelete(groupId);
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Could not delete group" });
  }
});

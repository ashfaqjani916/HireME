import 'dotenv/config'
import express from 'express';
import cors from 'cors';  
import { connectdb } from './db/db';
import {Group} from './models/Group';

import { checkUser, createUser } from './modules/user/userFunctions';
import { createGroup, deleteGroup, getUserGroups, joinGroup } from './modules/groups/groupFunctions';
import { addJobPosting, listJobPostings } from './modules/jobs/jobFunctions';

// var cron = require('node-cron');
//const schedule = require('node-schedule');

const app = express();
app.use(cors());
app.use(express.json());


const port = 8080;

//connect to the database 
connectdb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});



// cron.schedule('* * * * * *', () => {
//   console.log('running a task every minute');
//   sendEmail({emailID:"  ", emailBody:" "});
// },{
//   timezone: "Asia/Kolkata"
// });




//create user route
app.post('/createUser',createUser);

//a route to check if the user exists
app.post('/checkUser', checkUser);

// a route to fetch all the groups
app.get('/get-user-groups/:email', getUserGroups);

//create group route
app.post('/createGroup',createGroup);

//route to join the team 
app.post('/join-team', joinGroup);


//list job posting
app.get('/listJobPostings/:groupId', listJobPostings);

//add a new job
app.post('/addJobPosting', addJobPosting);

//delete a group
app.delete('/deleteGroup/:groupId', deleteGroup);

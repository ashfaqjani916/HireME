import 'dotenv/config'
import express from 'express';
import cors from 'cors';  
import { connectdb } from './db/db';
import { checkUser, createUser } from './modules/user/userFunctions';
import { createGroup, deleteGroup, getUserGroups, joinGroup } from './modules/groups/groupFunctions';
import { addJobPosting, listJobPostings } from './modules/jobs/jobFunctions';
import { VercelRequest, VercelResponse } from "@vercel/node";
const swaggerUi = require('swagger-ui-express');
const  swaggerJsDoc = require("swagger-jsdoc")
// var cron = require('node-cron');
//const schedule = require('node-schedule');

const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "hireMe API",
      version: "1.0.0",
      description: "This the OpenAPI spec for hireME's backend service"
    },
    servers: [
      {
        url: "http://localhost:8080"
      }
    ],
  },
    apis: ["./*.ts"]
}

const specs = swaggerJsDoc(options)

app.use("/api-docs", swaggerUi.serve , swaggerUi.setup(specs))

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


export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any); // Type cast to avoid Express-Vercel mismatch
}

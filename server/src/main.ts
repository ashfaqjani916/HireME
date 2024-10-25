import 'dotenv/config'
import express from 'express';
import cors from 'cors';  
import mongoose from 'mongoose';
import { connectdb } from './db/db';

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

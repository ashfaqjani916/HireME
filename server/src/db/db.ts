import mongoose from "mongoose";
import { dbName } from "../constants/constants";

export const connectdb = async () => {
  try{
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
      console.log(`\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`)
  }
  catch(error){
    console.log(error);
    process.exit(1);
  }
};


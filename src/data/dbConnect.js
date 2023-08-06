import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose.set("strictQuery",false);
if(process.env.ACCESS_DB){
  mongoose.connect(process.env.ACCESS_DB);
}

export let connectionDB = mongoose.connection;

import express ,{Request,Response} from "express";
import authUserRoute from "./user/routes/authRoutes";
import mongoose from "mongoose";
import User from "./user/models/userModel";
import dotenv from "dotenv";

dotenv.config();

const dataURL = process.env.DATABASE_URL;

if (!dataURL) {
    throw new Error('Missing MONGO_URI in environment variables');
  }


mongoose.connect(dataURL)
    .then(( ()=> console.log("MongoDb Connected")))
    .catch((err) => console.log("Mongo Err",err));

const app = express()



app.use(express.json());

app.use("/api/auth",authUserRoute);

app.listen(8800,() =>{
    console.log("Server is running!")
})
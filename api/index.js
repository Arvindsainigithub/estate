import express from "express";
import mongoose from "mongoose";
import dotenb from 'dotenv'
 dotenb.config();
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected successfully")
}).catch((err)=>{
    console.log(err)
});
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

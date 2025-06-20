import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.router.js";

import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json())
const PORT = 3000;


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter)


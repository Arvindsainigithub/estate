import User from "../models/user.model.js";
// bcrypt is using for the adding salt in password install npm i bcryptjs
// and hashing the password before saving it to the database
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ userName, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(200).json("User Created successfully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

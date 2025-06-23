import e from "express";
import User from "../models/user.model.js";
// bcrypt is using for the adding salt in password install npm i bcryptjs
// and hashing the password before saving it to the database
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ userName, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(404, "User not found");
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return next(401, "Invalid password");
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const passwordGenerated = Math.random().toString(36).slice(-8);
      const hashPassword = await bcrypt.hash(passwordGenerated, 10);
      const newUser = new User({
        userName: req.body.userName
          .split(" ")
          .join("")
          .toLowerCase()
          .Math.random()
          .toString(36)
          .slice(-4),
        email: req.body.email,
        password: hashPassword,
        photoURL: req.body.photoURL,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

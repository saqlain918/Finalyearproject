import userModel from "../models/user-model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const {
    name,
    age,
    gender,
    phoneNumber,
    farmSize,
    address,
    cnic,
    rating,
    type,
    email,
    password,
  } = req.body;
  try {
    if (
      !name ||
      !age ||
      !gender ||
      !phoneNumber ||
      !address ||
      !cnic ||
      !email ||
      !password
    ) {
      throw new Error("All fields are required");
    }
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      age,
      gender,
      phoneNumber,
      farmSize,
      address,
      cnic,
      rating,
      type,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      token: await user.generateToken(),
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token: await user.generateToken(),
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

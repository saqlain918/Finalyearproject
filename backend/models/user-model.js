import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    farmSize: {
      type: Number,
    },
    cnic: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export default mongoose.model("User", userSchema);

import userModel from "../models/user-model.js";
import bcrypt from "bcryptjs";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/profile_pictures"); // Directory to save profile pictures
//   },
//   filename: function (req, file, cb) {
//     const email = req.body.email; // Email from the request body
//     const fileExtension = path.extname(file.originalname); // Extract file extension
//     cb(null, email + fileExtension); // Use email as the filename
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// export const signup = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.json({ success: false, message: err.message });
//     }

//     const {
//       name,
//       age,
//       gender,
//       phoneNumber,
//       farmSize,
//       address,
//       cnic,
//       rating,
//       type,
//       email,
//       password,
//     } = req.body;

//     try {
//       // Check if required fields are provided
//       if (
//         !name ||
//         !age ||
//         !gender ||
//         !phoneNumber ||
//         !address ||
//         !cnic ||
//         !email ||
//         !password
//       ) {
//         throw new Error("All fields are required");
//       }

//       // Validate password length
//       if (password.length < 8) {
//         throw new Error("Password must be at least 8 characters long");
//       }

//       // Check if user already exists
//       const userExists = await userModel.findOne({ email });
//       if (userExists) {
//         throw new Error("User already exists");
//       }

//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Construct the user data
//       const userData = {
//         name,
//         age,
//         gender,
//         phoneNumber,
//         farmSize,
//         address,
//         cnic,
//         rating,
//         type,
//         email,
//         password: hashedPassword,
//       };

//       // If a profile picture was uploaded, save the file path
//       if (req.file) {
//         userData.profilePicture = req.file.path;
//       }

//       // Create the user
//       const user = await userModel.create(userData);

//       res.status(201).json({
//         success: true,
//         message: "User created successfully",
//         token: await user.generateToken(),
//         user: { ...user._doc, password: undefined },
//       });
//     } catch (error) {
//       res.json({ success: false, message: error.message });
//     }
//   });
// };

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

export const updateProfile = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProfileData = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error("All fields are required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({ isAdmin: false });
    if (!users) {
      throw new Error("Users not found");
    }
    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      users,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    await userModel.deleteOne({ _id: userId });
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

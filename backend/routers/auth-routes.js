import express from "express";
import {
  login,
  signup,
  updateProfile,
  getProfileData,
  getAllUsers,
  deleteUser,
} from "../controllers/auth-controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/get-profile", getProfileData);
router.post("/update-profile", updateProfile);
router.get("/get-all-users", getAllUsers);
router.delete("/delete-user/:userId", deleteUser);

export default router;

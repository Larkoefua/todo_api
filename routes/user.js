import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateProfile,
} from "../controllers/user.js";
import { userAvaterUpload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/me", userAvaterUpload.single('avatar'), updateProfile);

// Export router
export default userRouter;

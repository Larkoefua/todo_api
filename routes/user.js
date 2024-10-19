import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile, getProfile, } from "../controllers/user.js";
import { userAvaterUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js"; /* use this in routes you want authenticated */



// create router
const userRouter = Router();

// Define routes
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me", isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post("/users/logout", isAuthenticated, logoutUser);

userRouter.patch("/users/me", isAuthenticated, hasPermission('update_profile'),
 userAvaterUpload.single('avatar'), updateProfile);

// Export router
export default userRouter;

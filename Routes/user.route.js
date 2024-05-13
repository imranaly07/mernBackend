import express from "express";
import { signup, login } from "../Controllers/user.controller.js";

const signupRouter = express.Router();
const loginRouter = express.Router();

// Define routes for signup and login
signupRouter.post("/signup", signup);
loginRouter.post("/login", login);

// Export the routers
export { signupRouter, loginRouter };

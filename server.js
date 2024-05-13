import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseConnection } from "./DB/connection.js";
import { signupRouter, loginRouter } from "./Routes/user.route.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

// Establish database connection
databaseConnection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", signupRouter);
app.use("/user", loginRouter);




// Start the server
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});

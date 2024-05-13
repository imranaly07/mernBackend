import { User } from "../Models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: "Signup successful",user:{
            _id:newUser._id,
            username:newUser.username,
            email:newUser.email,
        
        } });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const login=async(req,res)=>{


    try {
        const {email,password}=req.body;

        let user=await User.findOne({email})

        if (!user) {
            return res.status(404).json({message:"user not found"})

            
        }

        let isVailedPassword=await bcryptjs.compare(password,user.password)

        if (!isVailedPassword) {
            return res.status(404).json({message:"email or password does not match!"})
            
            
        }

        res.status(200).json({message:"login sucessfully",user})

        
    } catch (error) {
        res.status(500).json({message:"server Err"})


        console.log(`server err`,error)
        
    }
}
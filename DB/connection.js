import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const URI=process.env.MONGO_URI



export const databaseConnection=async()=>{


    try {
        await mongoose.connect(URI)
        .then(()=>console.log("connectd to db"))
        
    } catch (error) {

        console.log(`faild to connect db ERR:${error}`)
        
    }
}
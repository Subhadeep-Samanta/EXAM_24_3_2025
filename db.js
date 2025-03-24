import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()


const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Mongodb successfully connected");
        
    } catch (error) {
        console.error("Error :",error.message)
    }
}

export default connectDB
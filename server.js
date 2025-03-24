import express from "express"
import connectDB from "./db.js"
import dotenv from "dotenv"

dotenv.config()
connectDB()
const PORT=process.env.PORT||3000

const app=express()
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost${PORT}`);
})
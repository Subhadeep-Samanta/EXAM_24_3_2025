import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
    },
    availableCopies:{
        type:Number,
        required:true
    },
    borrowedBy:[
        personid={
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

const BOOKITEM=mongoose.model("BOOKITEM",bookSchema)

export default BOOKITEM
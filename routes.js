import express from "express"
import BOOKITEM from "./BookSchema.js"

const router = express.Router()


//POST
router.post("/book",async(req,res)=>{
try {
    const book=new BOOKITEM(req.body)
await book.save()
res.status(201).json({message:"New book added",book})
} catch (error) {
    res.status(400).json({message:error.message})
}
})
//GET
router.get("/user",async(req,res)=>{
    try {
        const books=await BOOKITEM.find()
        res.status(200).json({message:"All Books details:",books}
        )
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//GET By Id
router.get("/book/:id",async(req,res)=>{
    try {
        const book=await BOOKITEM.findById(req.params.id)
        if(!book) return res.status(404).json({message:"Book not found"})
            res.status(200).json({message:"Book details",book})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//PUT
router.put("/book/:id",async(req,res)=>{
    try {
        const book = await BOOKITEM.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!book) return res.status(404).json({message:"Book not found"})
            res.status(200).json({message:"Book data updated",book})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//DELETE
router.delete("/book/:id",async(req,res)=>{
    try {
        const book = await BOOKITEM.findByIdAndDelete(req.params.id)
        if(!book) return res.status(404).json({message:"Book not found"})
            res.status(200).json({message:"Book details successfully deleted",book})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
export default router

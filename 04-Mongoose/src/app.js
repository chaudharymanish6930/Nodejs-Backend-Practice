const express = require('express')
const noteModel = require('./models/note.model')

const app = express()
// moddleware
app.use(express.json())


/*
CRUD operation
Create -> POST
Read -> GET
Update -> PATCH
Delete -> DELETE
*/

app.post("/notes", async (req,res)=>{
    const data = req.body // {title, discription}
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message:"Note created"
    })
})

app.get('/notes', async (req, res)=>{
    const notes = await noteModel.find() // return array[]
    // const notes = await noteModel.findOne({  // return only one
    //     title:"Manish"
    // })
    // const notes = await noteModel.find({
    //     title:"Aman Raghav"
    // })
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes:notes
    })
})

app.delete("/notes/:id", async (req, res)=>{
    const id=req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"Note Deleted Successfully"
    })
})

app.patch("/notes/:id", async(req, res)=>{
    const id= req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})
    
    res.status(200).json({
        message:"Update Successfully"
    })
})
module.exports=app
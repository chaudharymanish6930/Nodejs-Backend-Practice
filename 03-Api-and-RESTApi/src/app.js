// Server ko create karna
const express = require('express')

const app=express()
// middleware help to print data
app.use(express.json())

const notes=[]

// title , discription
// POST  Api = /notes 
app.post('/notes',(req, res)=>{
    // console.log(req.body)  req come from postman
    notes.push(req.body);
    console.log(req.body)

    res.status(201).json({
        meassage:"note create Successfully"
    })
})

// Get data from server to frontend
app.get('/notes',(req, res)=>{
    res.status(200).json({
        message:"notes fetched Successfully",
        notes:notes
    })
})

// delete  /notes/1,2,3,99  
// : use dynamic
app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message:"Note Deleted"
    })
})


app.patch('/notes/:index', (req, res)=>{
    // console.log(req.params);
    // console.log(req.body);
    // console.log(notes);

    const index = parseInt(req.params.index);
    const branch = req.body.Branch

    notes[index].Branch = branch

    // console.log(notes[index]);

    res.status(200).json({
        message:"Update Successfully",
        note: notes[index]
    })

    /* 
        const index= parseInt(req.params.index);
        const name= req.body.name;
        notes[index].name = name;

        res.status(200).json({
        message:"Complete Name Change",
        note:notes[index]
        })
    */
})


module.exports=app
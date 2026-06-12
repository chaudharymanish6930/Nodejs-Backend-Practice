const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    // age: Number,
    // DOB:Date
})

const noteModel=mongoose.model("notes", noteSchema)


module.exports = noteModel

/*
CRUD operation
Create -> POST
Read -> GET
Update -> PATCH
Delete -> DELETE
*/
const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')


const router = express.Router()

router.post('/create', async (req, res)=>{
    // console.log(req.body)

    // console.log(req.cookies)

    const token = req.cookies.token;
    if(!token){
        res.status(401).json({
            message:"Unauthorised"
        })
    }

    try{
        // jwt.verify(token, process.env.JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)

        const user = await userModel.findOne({
            _id:decoded.id
        })

        console.log(user)

    }
    catch (err){
        return res.status(401).json({
            message:"Token is Invalid"
        })
    }


    res.send("Post created Successfully")
})

module.exports = router
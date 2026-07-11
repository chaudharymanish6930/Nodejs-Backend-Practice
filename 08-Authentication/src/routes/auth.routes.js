const express = require("express")
const authController = require('../controllers/auth.controller')


const router = express.Router()


/* post /api/auth/register register */
router.post("/register", authController.registerUser)


/*
router.get("/test", (req, res)=>{
    console.log("Cookie: ", req.cookies) // all the tokens
    res.json({
        message:"Test route",
        cookies:req.cookies
    })
})
    */

module.exports=router;
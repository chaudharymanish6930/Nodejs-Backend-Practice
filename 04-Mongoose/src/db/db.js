const mongoose = require("mongoose");

const connectDB = async () => {
    
    await mongoose.connect("YOUR_MONGODB_URI");
    console.log("Connected to DB")
};

module.exports = connectDB;
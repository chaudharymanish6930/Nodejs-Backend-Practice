const mongoose = require("mongoose");

const connectDB = async () => {
    
    await mongoose.connect("mongodb://Backend-Learned:9355342840Ravi@ac-jhpahny-shard-00-00.lbyuace.mongodb.net:27017,ac-jhpahny-shard-00-01.lbyuace.mongodb.net:27017,ac-jhpahny-shard-00-02.lbyuace.mongodb.net:27017/?ssl=true&replicaSet=atlas-7hoxyh-shard-0&authSource=admin&appName=Backend-Learned");
    console.log("Connected to DB")
};

module.exports = connectDB;
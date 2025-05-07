const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = () => {
    mongoose.connect(mongoUri)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.log(error);
    })
}

module.exports = { initializeDatabase };
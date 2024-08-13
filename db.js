const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// database connection

const con = mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    throw err;
  });

module.exports = con;

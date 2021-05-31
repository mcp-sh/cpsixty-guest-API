const mongoose = require("mongoose");
require("dotenv").config();

const dbstring = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PWD}@${process.env.ATLAS_URI}/${process.env.ATLAS_DB}?retryWrites=true&w=majority`;
// console.log(dbstring)
const connectDB = async () => {
  try {
    await mongoose.connect(dbstring, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB connected succesfully...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8030;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () =>{
  console.log("MongoDB connection success!");
})

const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

app.listen(PORT, () =>{
  console.log(`Server is up and runing onport ${PORT}`);
})





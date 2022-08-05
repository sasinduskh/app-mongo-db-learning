const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  fname:{
    type: String,
    required: true,
  },
  lname:{
    type: String
  },
  classId:{
    type:String
  },
  nic:{
    type:String,
    required:true

  },
  dob:{
    type:String,
    required:true

  },
  gender:{
    type:String,
    required:true
  }
})

const student = mongoose.model("studnetinfos", studentSchema);

module.exports = student;
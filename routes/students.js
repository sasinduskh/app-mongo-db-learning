const router = require("express").Router();
let student = require("../models/student.js");

// http://localhost:PORT/student/add
router.route("/add").post((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const classId = req.body.classId;
  const nic = req.body.nic;
  const dob = req.body.dob;
  const gender = req.body.gender;

  const newStudent = new student({
    fname,
    lname,
    classId,
    nic,
    dob,
    gender
  })

  newStudent.save().then(() => {
    res.json("Student Add Success!");
  }).catch((err) => {
    console.log(err);
  })
})

// Display Student Data

router.route("/").get((req, res) => {
  student.find().then((students) => {
    res.json(students);
  }).catch((err) => {
    console.log(err);
  })
})

// Update Student 

router.route("/update/:id").put(async (req, res)=>{
  let userId = req.params.id;
  const {

  } = req.body;

  const updateStudent = {
    fname,
    lname,
    classId,
    nic,
    dob,
    gender
  }

  const update = await student.findByIdAndUpdate(userId, updateStudent).then(()=>{
    res.status(200).send({status: "User updated", user: update});

  }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updatating data"});
  })


  // Delete Student

  router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await student.findByIdAndDelete(userId).then(()=>{
      res.status(200).send({status: "User Deleted!"});
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with user delete", error: err.message});
    })
  })


  // Display Student by Id

  router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
   const user = await student.findById(userId).then(()=>{
      res.status(200).send({status: "User fetched", data: user})
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with user fitched", error: err.message});
    })
  })

  router.route("/hello").get((req,res)=>{
    console.log("Hello world");
  })

})

module.exports = router;
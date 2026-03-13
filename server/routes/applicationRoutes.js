const express = require("express");
const router = express.Router();
const Application = require("../models/Application");


// APPLY FOR JOB
router.post("/apply", async (req,res)=>{

try{

const {jobId,name,email,resume} = req.body;

const application = new Application({
jobId,
name,
email,
resume
});

await application.save();

res.json({message:"Application submitted successfully"});

}catch(error){

console.log(error);
res.status(500).json({message:"Error applying for job"});

}

});


// GET ALL APPLICATIONS
router.get("/", async (req,res)=>{

try{

const applications = await Application.find().populate("jobId");

res.json(applications);

}catch(error){

console.log(error);
res.status(500).json({message:"Error fetching applications"});

}

});

module.exports = router;
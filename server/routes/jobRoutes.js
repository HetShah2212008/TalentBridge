const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Create Job
router.post("/create", async (req, res) => {
  try {

    const { title, company, location, salary, description } = req.body;

    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description
    });

    await newJob.save();

    res.json({ message: "Job posted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error posting job" });
  }
});


// GET ALL JOBS
router.get("/all", async (req, res) => {
  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

module.exports = router;
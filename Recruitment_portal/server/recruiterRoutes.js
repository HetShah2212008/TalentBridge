const express = require("express");
const User = require("../models/User");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/candidates", protect, authorize("recruiter"), async (req, res) => {
  const candidates = await User.find({ role: "candidate" });
  res.json(candidates);
});

module.exports = router;
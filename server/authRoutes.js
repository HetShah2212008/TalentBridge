const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");

const router = express.Router();

// CV Upload Setup
const upload = multer({ dest: "uploads/" });

// Candidate Register
router.post("/register", upload.single("cv"), async (req, res) => {
  const { name, email, password, phone, education, skills } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "candidate",
    phone,
    education,
    skills,
    cv: req.file.path
  });

  res.json(user);
});

// Login (Both roles)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user._id, role: user.role }, "secretKey");

  res.json({ token, role: user.role });
});

module.exports = router;
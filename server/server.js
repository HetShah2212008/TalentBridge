const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recruiter", recruiterRoutes);

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/recruitmentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("Not authorized");

  const decoded = jwt.verify(token, "secretKey");
  req.user = decoded;
  next();
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json("Access Denied");
    }
    next();
  };
};

module.exports = { protect, authorize };
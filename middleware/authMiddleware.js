const jwt = require("jsonwebtoken");
require("dotenv").config();

const requireAuth = (req, res, next) => {
  const token = req.header("API-Token");
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(403).json({ msg: "No Access - Wrong Token" });
      } else {
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(403).json({ msg: "No Access - Token missing" });
  }
};

module.exports = { requireAuth };

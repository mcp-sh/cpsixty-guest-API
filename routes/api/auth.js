const express = require("express");
require("dotenv").config();
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { pw } = req.body;
  if (pw === process.env.TOKEN_AUTH) {
    const token = jwt.sign({ auth: true }, process.env.JWT_SECRET);
    res.json(token);
  }
});

module.exports = router;

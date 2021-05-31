const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api/guests", require("./routes/api/guests"));

app.get("/", (req, res) => {
  res.json({ msg: "hey there !" });
});

app.listen(port, () => {
  console.log(`API started on port: ${port}`);
});

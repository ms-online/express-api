const express = require("express");
const dotenv = require("dotenv");

// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "it's works" });
});

const PORT = process.env.PROT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
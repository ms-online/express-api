/*
 * @Author: 米斯特吴
 * @version: v1
 * @github: https://github.com/ms-online
 * @FilePath: /express-api/server.js
 * @Description: 文件作用
 */

const express = require("express");
const dotenv = require("dotenv");

// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

/**
 * @description: 获取所有数据
 * @route: /api/v1/msonline
 * @method: GET
 * @param {null}
 * @return: { success: true, msg: "get all datas success" }
 */
app.get("/api/v1/msonline", (req, res) => {
  //   res.send({ msg: "it's works" });
  res.status(200).json({ success: true, msg: "get all datas success" });
});

app.get("/api/v1/msonline/:id", (req, res) => {
  //   res.send({ msg: "it's works" });
  res.status(200).json({ success: true, msg: "get single data success" });
});

app.post("/api/v1/msonline", (req, res) => {
  //   res.send({ msg: "it's works" });
  res.status(200).json({ success: true, msg: "create data success" });
});

app.put("/api/v1/msonline/:id", (req, res) => {
  //   res.send({ msg: "it's works" });
  res.status(200).json({ success: true, msg: "update data success" });
});

app.delete("/api/v1/missonline/:id", (req, res) => {
  //   res.send({ msg: "it's works" });
  res.status(200).json({ success: true, msg: "delete data success" });
});

const PORT = process.env.PROT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

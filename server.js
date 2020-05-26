/*
 * @Author: 米斯特吴
 * @version: v1
 * @github: https://github.com/ms-online
 * @FilePath: /express-api/server.js
 * @Description: 文件作用
 */

const express = require("express");
const dotenv = require("dotenv");
const msonline = require("./routes/msonline");
// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// 挂载路由
app.use("/api/v1/msonline", msonline);

const PORT = process.env.PROT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

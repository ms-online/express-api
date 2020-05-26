/*
 * @Author: 米斯特吴
 * @version: v1
 * @github: https://github.com/ms-online
 * @FilePath: /express-api/routes/msonline.js
 * @Description: 路由
 */

const express = require("express");
const router = express.Router();

/**
 * @description: 获取所有数据
 * @route: /api/v1/msonline
 * @method: GET
 * @param {null}
 * @return: { success: true, msg: "get all datas success" }
 */
router.get("/", (req, res) => {
  res.send({ msg: "it's works" });
  //   res.status(200).json({ success: true, msg: "get all datas success" });
});

// router.get("/:id", (req, res) => {
//   //   res.send({ msg: "it's works" });
//   res.status(200).json({ success: true, msg: "get single data success" });
// });

// router.post("/", (req, res) => {
//   //   res.send({ msg: "it's works" });
//   res.status(200).json({ success: true, msg: "create data success" });
// });

// router.put("/:id", (req, res) => {
//   //   res.send({ msg: "it's works" });
//   res.status(200).json({ success: true, msg: "update data success" });
// });

// router.delete("/:id", (req, res) => {
//   //   res.send({ msg: "it's works" });
//   res.status(200).json({ success: true, msg: "delete data success" });
// });

module.exports = router;

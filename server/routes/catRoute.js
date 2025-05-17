const express = require("express");
const {
  addQuestion,
  getAllCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/getCategories", getAllCategories);
router.post("/addQues", addQuestion);

module.exports = router;

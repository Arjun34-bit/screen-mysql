const express = require("express");
const {
  addQuestion,
  getAllCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/getCategories", getAllCategories);
router.get("/addQues", addQuestion);

module.exports = router;

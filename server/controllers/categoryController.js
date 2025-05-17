const db = require("../dbConfig/db");

const getAllCategories = async (req, res) => {
  db.query("SELECT * FROM master", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const addQuestion = async (req, res) => {
  const { question, category_id } = req.body;

  if (!question || !category_id) {
    return res.status(400).json({ message: "Missing question or category_id" });
  }

  const query = "INSERT INTO details (master_id,question) VALUES (?, ?)";
  db.query(query, [category_id, question], (err, results) => {
    if (err) {
      console.error("Error adding question:", err.message);
      return res.status(400).json({ message: "Question not added" });
    }

    return res.status(201).json({
      message: "Question added successfully",
      insertedId: results.insertId,
    });
  });
};

module.exports = { getAllCategories, addQuestion };

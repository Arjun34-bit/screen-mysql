const db = require("../dbConfig/db");

const getAllCategories = async (req, res) => {
  db.query("SELECT * FROM master_category", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const addQuestion = (question, category_id, callback) => {
  const query =
    "INSERT INTO details_questions (question, category_id) VALUES (?, ?)";
  db.query(query, [question, category_id], (err, results) => {
    if (err) {
      console.error("Error adding question:", err.message);
      callback(err, null);
      return;
    }
    callback(null, results); // Send results back to the callback
  });
};

module.exports = { getAllCategories, addQuestion };

const express = require("express");
const dotenv = require("dotenv");

const db = require("./dbConfig/db");

const app = express();
dotenv.config();

// db();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Sever Started at PORT: ${PORT}`);
});

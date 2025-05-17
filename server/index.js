const express = require("express");
const dotenv = require("dotenv");

const db = require("./dbConfig/db");
const catRoutes = require("./routes/catRoute");

const app = express();
dotenv.config();

app.use(express.json());

// db();

app.use("/api", catRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Sever Started at PORT: ${PORT}`);
});

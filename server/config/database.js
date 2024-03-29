const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("[database] MySQL Connected...");
});
module.exports = connection;

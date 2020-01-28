const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DBPW || "passw0rd",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id ", connection.threadId);
});

module.exports = connection;
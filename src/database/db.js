import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "jatin",
  password: "Jatin@123",
  database: "classicmodels",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL!");
});

export default connection;

import express from "express";
import mysql from "mysql2/promise";

let pool = mysql.createPool({
    host: "db",
    user: "user",
    password: "password",
    database: "myapp_db",
});

const app = express();
const port = 5000;

app.get("/",async (req, res) => {
    let query = "show tables";
    let result = await pool.query(query);
  res.send("Bun + Express + Docker Watch = ❤️" + JSON.stringify(result[0]));
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
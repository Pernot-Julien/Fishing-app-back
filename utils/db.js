const mysql = require("mysql");
const dotenv= require("dotenv");
dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.getConnection(error => {
  if(error) throw error;
  console.log("Connexion BDD");
})

module.exports = connection;






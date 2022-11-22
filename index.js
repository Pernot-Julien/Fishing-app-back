const mysql = require('mysql')

const db = mysql.createConnection({
  host:"caracal.o2switch.net",
  database:"okgb8219_ProjetPeche",
  user:"okgb8219_raphael",
  password:"0zZ+HN@YF+?Y"
});
db.connect();
db.query(`SELECT * FROM User`, function(error, rows,fields) {
  if(error) throw error;
  console.log(rows[0])
} )
db.end();
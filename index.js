const mysql = require('mysql')

const db = mysql.createConnection({
  host:"https://caracal.o2switch.net:2083/cpsess8026920482/3rdparty/phpMyAdmin/db_structure.php?server=1&db=okgb8219_ProjetPeche",
  port:'3306',
  user:"pecheur2",
  password:"Y@sMG[STQ5ZA"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
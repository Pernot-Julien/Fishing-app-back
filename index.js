const mysql = require('mysql')

const db = mysql.createConnection({
  host:"caracal.o2switch.net",
  database:"okgb8219_test",
  user:"okgb8219_raphe",
  password:"9[b{4MXrb1x#"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.end();
  });
  /* 9[b{4MXrb1x# */
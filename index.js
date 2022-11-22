import { createConnection } from 'mysql';

const db = createConnection({
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
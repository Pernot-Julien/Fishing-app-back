const express = require("express");
const dotenv= require("dotenv");
const bodyParser = require('body-parser');

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
dotenv.config();

require("./routes/user.routes")(app);
require("./routes/fish.routes")(app);

var server = app.listen(process.env.SERVER_PORT, function() {
  console.log("Server listening at: " + process.env.SERVER_PORT)
});


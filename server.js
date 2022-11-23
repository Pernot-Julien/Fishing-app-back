const express = require("express");
const dotenv= require("dotenv");
const bodyParser = require('body-parser');

const app = express();
/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
}); */
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
dotenv.config();

/* app.get('/', (req,res) => {
  res.json({message: "NodeJs CRUD Application"});
}) */

require("./routes/user.routes")(app);





var server = app.listen(process.env.SERVER_PORT, function() {
  console.log("Server listening at: " + process.env.SERVER_PORT)
});
/* var server = app.listen(3001, function () {
  sutil.log( "server listening at port 3001......" );
}); */



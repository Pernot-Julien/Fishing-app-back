const User = require("../models/user.model");
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
      });
  }
  // Create a Employee
  const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
  });
  console.log(user)
  // Create a User in the database
  User.create(user, (err, data) => {
      if (err)
      res.status(508).send({
          message:
          err.message || "Some error occurred while creating the Employee."
      });
      else res.send(data);
  });
};
//Find All Users
 exports.findAll = (req,res) => {
  User.getAll((err, data) => {
    if(err)
    res.status(500).send({
      message: err.message || "Une erreur pour chopper les users"
    });
    else{ 
      res.send(data);
    }
  })
 };
//Remove a User
exports.delete = (req,res) => {
  User.remove(req.params.userId, (err,data)=> {
    if(err){
      if(err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: `Could not delete User with id ${req.params.userId}.`
        });
      }
    } else res.send({message: "User Deleted"});
  })
}

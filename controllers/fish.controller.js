const Fish = require("../models/fish.model");
exports.create = (req, res) => {
  //? Validate request
  if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
      });
  }
  //? Create a Fish
  const fish = new Fish({
      espece : req.body.espece,
      taille: req.body.taille,
      description: req.body.description,
      image: req.body.image
  });
  console.log(fish)
  //? Create a Fish in the database
  Fish.create(fish, (err, data) => {
      if (err)
      res.status(508).send({
          message:
          err.message || "Some error occurred while creating the fish."
      });
      else res.send(data);
  });
};
//?Find All Fishes
 exports.findAll = (req,res) => {
  Fish.getAll((err, data) => {
    if(err)
    res.status(500).send({
      message: err.message || "Some error occurred while finding fishes"
    });
    else{ 
      res.send(data);
    }
  })
 };
//?Remove a Fish
exports.delete = (req,res) => {
  Fish.remove(req.params.fishId, (err,data)=> {
    if(err){
      if(err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Fish with id ${req.params.fishId}.`
        });
      } else {
        res.status(500).send({
          message: `Could not delete Fish with id ${req.params.fishId}.`
        });
      }
    } else res.send({message: "Fish Deleted"});
  })
}

exports.update =(req,res) => {
  if(!req.body) {
    res.status(400).send({
      message:"Can't be empty!"
    });
  }
  Fish.updateById(
    req.params.fishId,
    new Fish(req.body),
    (err,data) => {
      if(err){
        if(err.kind === "not found") {
          res.status(404).send({
            message: `Not found fish with the id ${req.params.fishId}`
          });
        } else {
          res.status(500).send({
            message: "error updating "
          })
        }
      } else res.send(data)
    }
    )
}

exports.findOne =(req,res) => {
  Fish.findById(req.params.fishId, (err, data) => {
    if(err) {
      if(err.kind === 'not found') {
        res.status(404).send({
          message:'Fish not found'
        });
      } else {
        res.status(500).send({
          message: "Error" + req.params.fishId
        });
      }
    } else res.send(data);
  });
};


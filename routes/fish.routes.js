module.exports = app => {
    const fish = require("../controllers/fish.controller");
    app.post("/fish", fish.create);
    app.get("/fish", fish.findAll);
    app.get("/fish/:fishId", fish.findOne)
    app.delete("/fish/:fishId", fish.delete);
    app.put("/fish/:fishId", fish.update);
  }
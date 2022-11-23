module.exports = app => {
  const user = require("../controllers/user.controller");
  app.post("/user", user.create)
  app.get("/user", user.findAll);
  app.delete("/user/:userId", user.delete)
}
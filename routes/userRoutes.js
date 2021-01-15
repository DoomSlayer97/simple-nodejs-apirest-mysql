const { Router } = require("express");
const userController = require("../controllers/userController")

const routes = Router();

routes.post("/user", userController.create);
routes.get("/user", userController.findAll);
routes.get("/user/:id", userController.findOne);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.deleteOne);

module.exports = routes;


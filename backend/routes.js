const express = require('express');
const routes = express.Router();
const userController = require('./src/database/controllers/User');

routes.post("/signup", userController.postUser);
routes.post("/login", userController.userLogin);
routes.get("/user", userController.getUsers);

module.exports = routes;
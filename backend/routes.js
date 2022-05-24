const express = require('express');
const routes = express.Router();
const postUser = require('./src/database/controllers/User');
const getUsers = require('./src/database/controllers/User');

routes.post("/user", postUser.postUser);
routes.get("/user", getUsers.getUsers);

module.exports = routes;
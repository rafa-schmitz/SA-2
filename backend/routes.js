const express = require('express');
const routes = express.Router();
const postUser = require('./src/database/controllers/User');

routes.post("/user", postUser.postUser);

module.exports = routes;
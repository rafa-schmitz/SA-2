const express = require('express');
const routes = express.Router();
const userController = require('./src/database/controllers/User');
const postUser = require('./src/database/controllers/User');
const getSheet = require('./src/database/controllers/Sheet_C');
const postSheet = require('./src/database/controllers/Sheet_C');
const postInv = require('./src/database/controllers/Sheet_C');
const postSpell = require('./src/database/controllers/Sheet_C');
const putSheet = require('./src/database/controllers/Sheet_C');
const putInv = require('./src/database/controllers/Sheet_C');
const putSpell = require('./src/database/controllers/Sheet_C');
const deleteSheet = require('./src/database/controllers/Sheet_C');


routes.put("/userUpdate/:IDUSER", userController.alterUsername);
routes.post("/signup", userController.postUser);
routes.post("/login", userController.userLogin);
routes.get("/user", userController.getUsers);
routes.post("/user", postUser.postUser);
routes.post("/Sheet/", postSheet.postSheet);
routes.post("/Inventory/", postInv.postInv);
routes.post("/Spell/", postSpell.postSpell);
routes.get("/Sheet/:IDUSER", getSheet.getSheet);
routes.put("/Sheet/:IDUSER", putSheet.putSheet);
routes.put("/Inventory/:IDUSER", putInv.putInv);
routes.put("/Spell/:IDUSER", putSpell.putSpell);
routes.delete("/Sheet/:IDUSER", deleteSheet.deleteSheet);

module.exports = routes;
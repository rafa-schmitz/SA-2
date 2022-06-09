const express = require('express');
const routes = express.Router();
const userController = require('./src/database/controllers/User');
const sheetController = require('./src/database/controllers/Sheet_C');


routes.put("/userUpdate/:IDUSER", userController.alterUsername);
routes.post("/signup", userController.postUser);
routes.post("/login", userController.userLogin);
routes.get("/user", userController.getUsers);
routes.post("/user", userController.postUser);
routes.post("/Sheet/", sheetController.postSheet);
routes.post("/Inventory/", sheetController.postInv);
routes.post("/Spell/", sheetController.postSpell);
routes.get("/Sheet/:IDUSER", sheetController.getSheet);
routes.put("/Sheet/:IDUSER", sheetController.putSheet);
routes.put("/Inventory/:IDUSER", sheetController.putInv);
routes.put("/Spell/:IDUSER", sheetController.putSpell);
routes.delete("/Sheet/:IDUSER", sheetController.deleteSheet);

module.exports = routes;
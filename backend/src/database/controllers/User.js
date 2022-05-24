const User = require("../../entities/User");
// const express = require('express');
const { getRepository } = require("typeorm");

// app = express();

// app.use(express.json());

// app.post("/users", async (req, res) => {
//     let userRepository = getRepository("users");

//     const users = await userRepository.find();
//     return res.status(200).json({users});
// })

module.exports = {
  async postUser(req, res) {
    const { USERNAME, EMAIL, PASSWORD_U, TYPE_U } = req.body;
    let user = getRepository(User);

    const response = await user.insert({ USERNAME, EMAIL, PASSWORD_U, TYPE_U });

    try {
      return res.status(200).json({
        dados: response
      });
    } catch (err) {
      return res.status(400).json({
        erro: "bad request",
      });
    }
  },

  async getUsers(req, res) {
    let users = getRepository(User);

    const response = await users.find();

    try {
      return res.status(200).json({
        dados: response
      });
    } catch (err) {
      return res.status(400).json({
        error: res.error,
      });
    }
  },

  
};

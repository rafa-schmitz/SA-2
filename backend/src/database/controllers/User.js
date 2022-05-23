const User = require('../../entities/User');
// const express = require('express');
const { getRepository } = require('typeorm');

// app = express();

// app.use(express.json());

// app.post("/users", async (req, res) => {
//     let userRepository = getRepository("users");

//     const users = await userRepository.find();
//     return res.status(200).json({users});
// })

module.exports = {
  async postUser(req, res) {
    const {} = req.body;
    let user = getRepository(User);

    const response = await user.save(req.body);
    
    try {
      return res.status(200).json({
        dados: response
      })
    } catch (err) {
      return res.status(400).json({
        erro: 'deu ruim pai'
      })
    }
  }
}
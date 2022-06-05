const Yup = require("yup");
const User = require("../../entities/User");
const { getRepository } = require("typeorm");

module.exports = {
  async postUser(req, res) {
    const schema = Yup.object().shape({
      USERNAME: Yup.string()
        .required("Um usuário é necessário!"),
      EMAIL: Yup.string()
        .required("Um endereço de e-mail é necessário!")
        .email("Insira um e-mail válido!"),
      PASSWORD_U: Yup.string()
        .required("Uma senha é necessária!")
    });

    try {
      await schema.validate(req.body);

      const { USERNAME, EMAIL, PASSWORD_U, TYPE_U } = req.body;
      let user = getRepository(User);

      const userValidation = await user.find({
        where: [{ USERNAME: USERNAME }],
      });
      
      const emailValidation = await user.find({
        where: [{ EMAIL: EMAIL }],
      });

      if (userValidation[0]) {
        return res.status(400).json({
          message: "Este usuário já pertence à uma conta!"
        });
      }

      if (emailValidation[0]) {
        return res.status(400).json({
          message: "Este email já possui uma conta!"
        });
      }

      const response = await user.insert({
        USERNAME,
        EMAIL,
        PASSWORD_U,
        TYPE_U,
      });

      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        err
      });
    }
  },

  async getUsers(req, res) {
    let users = getRepository(User);

    const response = await users.find();

    try {
      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        error: res.error,
      });
    }
  },

  async userLogin(req, res) {
    const schema = Yup.object().shape({
      USERNAME: Yup.string().required("Preencha o campo de usuário!"),
      PASSWORD_U: Yup.string().required("Preencha o campo de senha!"),
    });
    
    try {
      await schema.validate(req.body);

      const { USERNAME, PASSWORD_U } = req.body;
      let user = getRepository(User);

      const loginAuthentication = await user.find({
        where: {
          USERNAME: USERNAME,
          PASSWORD_U: PASSWORD_U,
        },
      });

      if (loginAuthentication[0])
        return res.status(200).json({
          error: false,
          msg: "Login efetuado com sucesso!",
          dados: loginAuthentication,
        });
      else if (loginAuthentication)
        return res.status(404).json({
          err
        });
    } catch (err) {
      return res.status(400).json({
        err
      });
    }
  },
};

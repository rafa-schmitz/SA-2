const Yup = require("yup");
const User = require("../../entities/User");
const { getRepository } = require("typeorm");

module.exports = {
  async postUser(req, res) {

    const schema = Yup.object().shape({
      USERNAME: Yup.string()
        .required("A username is required!")
        .min(3, "Erro: Campo nome precisa ter pelo menos 3 caracteres!"),
      EMAIL: Yup.string()
        .required("An e-mail address is required!")
        .email("Please enter a valid e-mail"),
      PASSWORD_U: Yup.string()
        .required("A password is required!")
        .min(6, "Erro: Campo senha precisa ter pelo menos 6 caracteres!"),
    });

    await schema.validate(req.body);

    const { USERNAME, EMAIL, PASSWORD_U, TYPE_U } = req.body;
    let user = getRepository(User);
    const response = await user.insert({ USERNAME, EMAIL, PASSWORD_U, TYPE_U });

    const userValidation = await user.findAll({
      where: {
        USERNAME,
        EMAIL
      }
    });

    console.log(userValidation);

    if (userValidation === null) {
      return res.status(400).json({
        error: true,
        msg: EMAIL,
      });
    }

    try {
      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        error: "bad request",
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
    try {
      const { EMAIL, PASSWORD_U } = req.body;
      let user = getRepository(User);

      const loginAuthentication = await user.findOne({
        where: {
          EMAIL,
          PASSWORD_U
        }
      });

      if (loginAuthentication)
        return res.status(200).json({
          error: false,
          msg: "Login efetuado com sucesso!",
          dados: loginAuthentication,
        });
      else if (!loginAuthentication)
        return res.status(404).json({
          error: true,
          msg: "Falha ao efetuar o login!",
        });
    } catch ({ ...err }) {
      console.log(err);
      return res.status(400).json({
        error: true,
        msg: err,
      });
    }
  },
};

const Yup = require("yup");
const User = require("../../entities/User");
const { getRepository } = require("typeorm");

module.exports = {
  async postUser(req, res) {
    const schema = Yup.object().shape({
      USERNAME: Yup.string()
        .required("A username is required!"),
      EMAIL: Yup.string()
        .required("An e-mail address is required!")
        .email("Please enter a valid e-mail"),
      PASSWORD_U: Yup.string()
        .required("A password is required!")
    });

    try {
      await schema.validate(req.body);

      const { USERNAME, EMAIL, PASSWORD_U, TYPE_U } = req.body;
      let user = getRepository(User);

      const userValidation = await user.find({
        where: [{ USERNAME: USERNAME }, { EMAIL: EMAIL }],
      });

      console.log(userValidation);

      if (userValidation[0]) {
        return res.status(400).json({
          error: true,
          msg: res.err,
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
        error: {msg: "Este usuário e/ou email já existe"},
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
      USERNAME: Yup.string().required("A username is required!"),
      PASSWORD_U: Yup.string().required("A password is required!"),
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

      console.log(loginAuthentication);

      if (loginAuthentication[0])
        return res.status(200).json({
          error: false,
          msg: "Login efetuado com sucesso!",
          dados: loginAuthentication,
        });
      else if (loginAuthentication)
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

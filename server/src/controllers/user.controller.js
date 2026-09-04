import logger from "../utils/logger.js";
import User from "../models/user.model.js";
import { randomMixedString } from "../utils/functions/randomString.js";

/*const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    await User.create({
      username,
      email,
      _id: `user_${randomMixedString(12)}`,
    });
    res.status(200).json({
      message: "Usuário registrado com sucesso",
    });
  } catch (e) {
    if (e.code === 11000) {
      logger.error("Erro no registro de usuário:\n", e);
      res.status(400).json({
        message: "Email já registrado",
      });
      return;
    }
    logger.error("Erro no registro de usuário:\n", e);
    res.status(400).json({
      message: "Erro ao registrar usuário",
    });
  }
};

const login = async (req, res) => {
  try {
    res.status(200).json({
      message: "Login efetuado com sucesso",
    });
  } catch (e) {
    logger.error("Erro no login:\n", e);
    res.status(404).json({
      message: "Erro ao efetuar login",
    });
  }
};*/

const getUserInfo = async (req, res) => {
  res.status(200).json({
    isLoggedIn: true,
    user: req.user,
  });
};

export { getUserInfo };

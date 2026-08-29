import logger from "../utils/logger.js";
import User from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    await User.create({ username, email });
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
};

export { registerUser, login };

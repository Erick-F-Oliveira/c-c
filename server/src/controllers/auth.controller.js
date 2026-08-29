import express from "express";
import passport from "passport";

const router = express.Router();

// Rota para verificar status de autenticação
const authStatus = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: {
        id: req.user.id,
        username: req.user.username,
        discordId: req.user.discordId,
        avatar: req.user.avatar,
        email: req.user.email,
      },
    });
  } else {
    res.json({ isAuthenticated: false });
  }
};

// Rota de callback que o Discord usa para enviar a resposta
const authRedirect = passport.authenticate("discord", {
  failureRedirect: "/logout", // Rota em caso de falha
  successRedirect: "http://localhost:3000/api/auth/status", // Rota em caso de sucesso
});

const authLogout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao fazer logout" });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao destruir sessão" });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Logout realizado com sucesso" });
    });
  });
};

export { authRedirect, authStatus, authLogout };

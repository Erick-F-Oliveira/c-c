import passport from "passport";

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
const discordAuthRedirect = passport.authenticate("discord", {
  failureRedirect: "/logout", // Rota em caso de falha
  successRedirect: "http://localhost:5173/me", // Rota em caso de sucesso
});
const googleAuthRedirect = passport.authenticate("google", {
  failureRedirect: "/logout", // Rota em caso de falha
  successRedirect: "http://localhost:5173/me", // Rota em caso de sucesso
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
      res.clearCookie("connect.sid", { path: "/" });
      res.json({ message: "Logout realizado com sucesso" });
    });
  });
};

export { discordAuthRedirect, googleAuthRedirect, authStatus, authLogout };

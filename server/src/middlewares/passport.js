const isAuthenticated = (req, res, next) => {
  // A função isAuthenticated() é adicionada pelo Passport ao objeto req.
  if (req.isAuthenticated()) {
    // Se o usuário está logado, ele pode seguir para a próxima função (next())
    return next();
  }

  // Se o usuário não está logado, retorna um erro de não autorizado.
  res
    .status(401)
    .json({ error: "Você precisa estar autenticado para acessar esta rota." });
};

export default isAuthenticated;

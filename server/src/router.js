import { Router } from "express";
import health from "./routes/health.route.js";
import login from "./routes/user.route.js";
import auth from "./routes/auth.route.js";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API Card Game online e operacional!" });
});

// Rota de status
router.use("/health", health);

//Rota de cadastro de usuário
router.use("/register", login);

//Rota de login
router.use("/login", login);

//Rota de autenticação
router.use("/auth", auth);

// Qualquer rota não encontrada cai aqui
router.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada na nossa api" });
});

export default router;

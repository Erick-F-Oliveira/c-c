import { Router } from "express";
import health from "./routes/health.route.js";
import user from "./routes/user.route.js";
import auth from "./routes/auth.route.js";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API Card Game online e operacional!" });
});

// Rota de status
router.use("/health", health);

//Rota de cadastro de usuário
//acho que não vou usar por enquanto, no momento não to afim de trabalhar com esqueci senha e etc.
//router.use("/register", user);

//Rota de login
//router.use("/login", user);

//Rota de autenticação
router.use("/auth", auth);

//Rota de usuário logado
router.use("/user", user);

// Qualquer rota não encontrada cai aqui
router.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada na nossa api" });
});

export default router;

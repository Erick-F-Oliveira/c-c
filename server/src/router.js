import { Router } from 'express';
import health from "./routes/health.route.js"
const router = Router()

router.get("/", (req, res) => {
    res.json({ message: "API Card Game online e operacional!" });
});

// Rotas de status
router.use("/health", health);


// Qualquer rota não encontrada cai aqui
router.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada na nossa api" });
});

export default router;
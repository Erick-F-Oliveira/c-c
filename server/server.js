import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";
import cors from "cors";
import logger from "./src/utils/logger.js";
import connect from "./src/config/db.js";
import enemyCardsData from "./src/data/cards/enemy-cards-data.js";
import random from "./src/utils/functions/randomEnemy.js";

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  logger.info("📡 Cliente conectado:", socket.id);

  socket.on("ping", () => {
    logger.info("📩 Ping recebido de:", socket.id);
    socket.emit("pong", "Resposta do servidor!");
  });
  // Quando o cliente pedir um inimigo
  socket.on("request_enemy", () => {
    logger.info(`🎲 Sorteando inimigo para ${socket.id}...`);

    // Sorteia no servidor
    const enemyFront = random(enemyCardsData)[0];

    // Envia o resultado APENAS para esse cliente
    socket.emit("enemy_drawn", enemyFront);

    logger.info(`🐉 Inimigo sorteado: ${enemyFront.name}`);
  });

  // Boa prática: saber quando o cliente sai
  socket.on("disconnect", () => {
    logger.info("🔌 Cliente desconectado:", socket.id);
  });
});

// Exportar para testes (como você já estava fazendo)
export { httpServer, io };

try {
  httpServer.listen(process.env.PORT || 8000, () => {
    logger.success(`💻 Servidor rodando na porta ${process.env.PORT || 8000}`);
  });
  await connect();
  logger.success("Tudo ok");

  logger.info("Sorteando um inimigo...");
  const enemy = random(enemyCardsData)[0];
  logger.info(enemy.name);
} catch (e) {
  logger.error(e);
}

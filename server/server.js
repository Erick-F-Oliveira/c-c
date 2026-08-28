import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";
import cors from "cors";
import logger from "./src/utils/logger.js";
import connect from "./src/config/db.js";
import random from "./src/utils/functions/randomEnemy.js";
import CardRegistry from "./src/registry/card-registry.js";
import setupSockets from "./src/sockets/index.js";

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
setupSockets(io)
logger.info(setupSockets.id)
export { httpServer, io };


(async () => {try {
    CardRegistry.initialize()
    await connect();
    await CardRegistry.getCreatureCard(8)

  httpServer.listen(process.env.PORT || 8000, () => {
    logger.superSuccess(`💻 Servidor rodando na porta ${process.env.PORT || 8000}`);
  });

    logger.success("Tudo ok");
} catch (e) {
  logger.error(e);
}})()

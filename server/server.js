import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";
import cors from "cors";
import logger from "./src/utils/logger.js";
import connect from "./src/config/db.js";
import CreatureCardRegistry from "./src/registry/creatureCard-registry.js";
import ItemCardRegistry from "./src/registry/itemCard-registry.js";
import setupSockets from "./src/sockets/index.js";
import MagicCardRegistry from "./src/registry/magicCard-registry.js";

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
setupSockets(io);
export { httpServer, io };

(async () => {
  try {
    //Inicializa os regisros das cartas
    CreatureCardRegistry.initialize();
    ItemCardRegistry.initialize();
    MagicCardRegistry.initialize();
    logger.info("Cartas registradas com sucesso!");
    logger.simple("==================================");

    await connect();

    httpServer.listen(process.env.PORT || 8000, () => {
      logger.superSuccess(
        `💻 Servidor rodando na porta ${process.env.PORT || 8000}`,
      );
    });

    logger.success("Tudo ok");
  } catch (e) {
    logger.error(e);
  }
})();

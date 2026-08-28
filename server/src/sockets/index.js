import logger from "../utils/logger.js";
import registerGameHandlers from "./game.socket.js";

function setupSockets(io) {
    io.on("connection", (socket) => {
        logger.info("Socket.io pronto")
        logger.info(`📡 Cliente conectado no Socket: ${socket.id}`);


        // Registra os módulos
        registerGameHandlers(io, socket);

        socket.on("disconnect", () => {
            logger.info(`🔌 Cliente desconectado: ${socket.id}`);
        });

    });
 }

export default setupSockets
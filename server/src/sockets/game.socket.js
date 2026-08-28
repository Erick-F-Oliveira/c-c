import CardRegistry from "../registry/card-registry.js";
import random from "../utils/functions/randomEnemy.js";
import logger from "../utils/logger.js";

export default function registerGameHandlers(io, socket) {

    // Evento para ENTRAR em uma sala específica
    socket.on("join_room", (roomName) => {
        socket.join(roomName); // 👈 Esse comando coloca o socket dentro da sala!
        logger.info(`🚪 Socket ${socket.id} entrou na sala: ${roomName}`);

        // Avisa todos QUE JÁ ESTÃO na sala que alguém entrou
        io.to(roomName).emit("room_message", `Um novo jogador entrou na sala: ${socket.id}`);
    });

    // Evento de sortear inimigo focado NA SALA
    socket.on("request_enemy_for_room", (roomName) => {
        const enemyDrawn = random(CardRegistry.getAllEnemyCards())[0];

        logger.info(`🎲 Sorteando inimigo para a sala ${roomName}...`);

        // 💡 AQUI O SEGREDO: io.to(roomName) manda a mensagem APENAS para os integrantes dessa sala!
        io.to(roomName).emit("enemy_drawn", {
            drawnBy: socket.id,
            enemy: enemyDrawn
        });
    });
}

//Código gerado por IA
import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("📡 Cliente conectado:", socket.id);

  socket.on("ping", () => {
    socket.emit("pong", "Resposta do servidor!");
  });
});

// Exportar para testes
export { httpServer, io };

httpServer.listen(process.env.PORT || 8000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 8000}`);
});

import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";
import cors from "cors";

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
  console.log("📡 Cliente conectado:", socket.id);

  socket.on("ping", () => {
    console.log("📩 Ping recebido de:", socket.id);
    socket.emit("pong", "Resposta do servidor!");
  });

  // Boa prática: saber quando o cliente sai
  socket.on("disconnect", () => {
    console.log("🔌 Cliente desconectado:", socket.id);
  });
});

// Exportar para testes (como você já estava fazendo)
export { httpServer, io };

httpServer.listen(process.env.PORT || 8000, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 8000}`);
});

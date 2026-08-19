import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

socket.on("connect", () => {
  console.log("🟢 Conectado:", socket.id);

  socket.emit("ping");
});

socket.on("pong", (message) => {
  console.log("📨 Resposta:", message);
});

import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ mensagem: "Servidor funcionando!" });
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    timestamp: new Date().toISOString(),
  });
});

export default app;

import express from "express";
import cors from "cors";
import connect from "../src/config/db.js"

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
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

import express from "express";
import cors from "cors";
import router from "./router.js"
import connect from "../src/config/db.js"

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use("/api", router);



export default app;

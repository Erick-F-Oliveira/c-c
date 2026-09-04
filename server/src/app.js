import express from "express";
import cors from "cors";
import router from "./router.js";
import session from "express-session";
import passport from "passport";
import passportConfig from "./config/passport.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    httpOnly: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }, // 3 dias
  }),
);
passportConfig();
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

export default app;

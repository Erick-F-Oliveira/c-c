import { Router } from "express";
import { login, registerUser } from "../controllers/user.controller.js";
const router = Router();

router.post("/", registerUser);

router.get("/", login);

export default router;

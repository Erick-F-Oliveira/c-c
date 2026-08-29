import { Router } from "express";
import passport from "passport";
import {
  authRedirect,
  authStatus,
  authLogout,
} from "../controllers/auth.controller.js";
const router = Router();

// Rota de login com Discord, inicia o processo de autenticação
router.get("/discord/login", passport.authenticate("discord"));
//Rota na qual o Discord redireciona após a autenticação bem sucedida ou não
router.get("/discord/callback", authRedirect);

//rota para verificar se o usuário está autenticado
router.get("/status", authStatus);

//rota para logout
router.get("/logout", authLogout);

export default router;

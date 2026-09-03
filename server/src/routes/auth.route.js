import { Router } from "express";
import passport from "passport";
import {
  authStatus,
  authLogout,
  googleAuthRedirect,
  discordAuthRedirect,
} from "../controllers/auth.controller.js";
const router = Router();

// Rota de login com Discord, inicia o processo de autenticação
router.get("/discord/login", passport.authenticate("discord"));
//Rota na qual o Discord redireciona após a autenticação bem sucedida ou não
router.get("/discord/callback", discordAuthRedirect);

//Rota de login com Google, inicia o processo de autenticação
router.get("/google/login", passport.authenticate("google"));
//Rota na qual o Google redireciona após a autenticação bem sucedida ou não
router.get("/google/callback", googleAuthRedirect);

//rota para verificar se o usuário está autenticado
router.get("/status", authStatus);

//rota para logout
router.get("/logout", authLogout);

export default router;

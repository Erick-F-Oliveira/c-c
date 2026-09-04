import { Router } from "express";
import { getUserInfo } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/passport.js";
const router = Router();

//router.post("/", registerUser);
//router.get("/", login);

router.use(isAuthenticated);
router.get("/me", getUserInfo);

export default router;

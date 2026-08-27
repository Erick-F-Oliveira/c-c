import {Router} from 'express';
import getStatus from "../controllers/health.controller.js"
const router = Router()

router.get('/', getStatus);

export default router
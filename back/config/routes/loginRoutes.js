import express from "express";
import { loginUser } from '../../src/controllers/loginController.js';
import { validateParamLogin } from '../../middlewares/validateParamLogin.js';
const router = express.Router();

router.post("/", validateParamLogin, loginUser);

export default router;
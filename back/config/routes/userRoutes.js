import express from "express";
import { createNewUser } from '../../src/controllers/usersController.js';
import {validateParamUser } from '../../middlewares/validateParamUser.js';


const router = express.Router();

router.post("/", validateParamUser, createNewUser)

export default router;
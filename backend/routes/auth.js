import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
const router = express.Router();

//Registrar novo usuario
router.route("/register").post(registerUser);

//Rota de login
router.route("/login").post(loginUser);

export default router;

import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  getByUserPass,
  getUser,
} from "../controllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);

//router.get("/usuarios/:id", getUsuarioById);

router.post("/usuarios/login", getByUserPass);
//router.post("/usuarios/login", getUser);
//router.get("/usuarios/:id", getUsuarioById);

export default router;

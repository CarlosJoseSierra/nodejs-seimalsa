import { Router } from "express";
import {
  getEquipos,
  getEquipoById,
} from "../controllers/equipos.controller";

const router = Router();

router.get("/equipos", getEquipos);

router.get("/equipos/:id", getEquipoById);


export default router;

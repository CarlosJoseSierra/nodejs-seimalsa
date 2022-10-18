import { Router } from "express";
import {
    getModeloByIdCliente,
    getTotalModelo,
} from "../controllers/modelos.controller";

const router = Router();

//router.get("/modelosy", getEquipos);
router.get("/modelos/:id/:id2", getModeloByIdCliente);
router.get("/modelosx", getTotalModelo);

export default router;

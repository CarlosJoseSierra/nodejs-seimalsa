import { Router } from "express";
import {
  getClientes,
  getClienteById,
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", getClientes);

router.get("/clientes/:id", getClienteById);


export default router;

import { Router } from "express";
import {
  getLogos,
  getLogoById,
} from "../controllers/logos.controller";

const router = Router();

router.get("/logos", getLogos);

router.get("/logos/:id", getLogoById);


export default router;

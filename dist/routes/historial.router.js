"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _historial = require("../controllers/historial.controller");
var router = (0, _express.Router)();
router.get("/historial1/:id/:id2", _historial.getHistReparados);
router.get("/historial2/:id/:id2", _historial.getHistDisponibles);
router.get("/historial3/:id/:id2", _historial.getHistEntregados);
router.get("/historial/:id/:id2", _historial.getTopFiveItems);
router.get("/historials", _historial.getTotalItemsServ);
router.get("/historial4/:id/:id2", _historial.getHistorialEquipoEntregado);
router.get("/historial5/:id/:id2", _historial.getHistorialEquipoReparado);
router.get("/historial6/:id/:id2", _historial.getHistorialEquipoDisponible);

//totales de la grafica del area delDashboard
router.get("/historialx", _historial.getHistorialTotalEquipoReparado);
router.get("/historialy", _historial.getHistorialTotalEquipoDisponible);
router.get("/historialz", _historial.getHistorialTotalEquipoEntregado);
//La parte de abajo del dashboard
router.get("/historial4z", _historial.getHistTotalEntregado);
router.get("/historial5x", _historial.getHistTotalReparado);
router.get("/historial6y", _historial.getHistTotalDisponible);
var _default = router;
exports["default"] = _default;
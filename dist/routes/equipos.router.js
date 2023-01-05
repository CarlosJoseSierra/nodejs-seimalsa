"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _equipos = require("../controllers/equipos.controller");
var router = (0, _express.Router)();
router.get("/equipos", _equipos.getEquipos);
router.get("/equipos/:id", _equipos.getEquipoById);
var _default = router;
exports["default"] = _default;
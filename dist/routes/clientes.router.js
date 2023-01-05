"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clientes = require("../controllers/clientes.controller");
var router = (0, _express.Router)();
router.get("/clientes", _clientes.getClientes);
router.get("/clientes/:id", _clientes.getClienteById);
var _default = router;
exports["default"] = _default;
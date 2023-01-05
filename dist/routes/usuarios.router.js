"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuarios = require("../controllers/usuarios.controller");
var router = (0, _express.Router)();
router.get("/usuarios", _usuarios.getUsuarios);

//router.get("/usuarios/:id", getUsuarioById);

router.post("/usuarios/login", _usuarios.getByUserPass);
//router.post("/usuarios/login", getUser);
//router.get("/usuarios/:id", getUsuarioById);
var _default = router;
exports["default"] = _default;
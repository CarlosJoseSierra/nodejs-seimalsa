"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _logos = require("../controllers/logos.controller");
var router = (0, _express.Router)();
router.get("/logos", _logos.getLogos);
router.get("/logos/:id", _logos.getLogoById);
var _default = router;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _activos = _interopRequireDefault(require("./routes/activos.router"));
var _clientes = _interopRequireDefault(require("./routes/clientes.router"));
var _equipos = _interopRequireDefault(require("./routes/equipos.router"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _usuarios = _interopRequireDefault(require("./routes/usuarios.router"));
var _historial = _interopRequireDefault(require("./routes/historial.router"));
var _modelos = _interopRequireDefault(require("./routes/modelos.router"));
var _logos = _interopRequireDefault(require("./routes/logos.router"));
var _morgan = _interopRequireDefault(require("morgan"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// settings
app.set("port", _config["default"].port);

// Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());

// Routes

app.use("/api", _products["default"]);
app.use("/api", _activos["default"]);
app.use("/api", _clientes["default"]);
app.use("/api", _equipos["default"]);
app.use("/api", _usuarios["default"]);
app.use("/api", _historial["default"]);
app.use("/api", _modelos["default"]);
app.use("/api", _logos["default"]);
var _default = app;
exports["default"] = _default;
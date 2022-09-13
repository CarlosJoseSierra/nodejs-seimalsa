import express from "express";
import cors from "cors";
import activoRoutes from "./routes/activos.router";
import clienteRoutes from "./routes/clientes.router";
import equipoRoutes from "./routes/equipos.router";
import productRoutes from "./routes/products.routes";
import usuarioRoutes from "./routes/usuarios.router";
import historialRoutes from "./routes/historial.router";
import modeloRoutes from "./routes/modelos.router";
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors(
    {
        //origin: "https://api-seimalsa.herokuapp.com",
        //origin: "http://localhost:3000",
    }
));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.use("/api", productRoutes);
app.use("/api", activoRoutes);
app.use("/api", clienteRoutes);
app.use("/api", equipoRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", historialRoutes);
app.use("/api", modeloRoutes);


export default app;

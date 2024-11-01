import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import { Login } from "./controllers/auth.controller.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Configuración de CORS
app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Configuración de Express
app.use(express.json());

// Rutas de autenticación
app.use("/api/auth", authRoutes);

// Ruta de inicio de sesión
authRoutes.post("/Login", Login);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

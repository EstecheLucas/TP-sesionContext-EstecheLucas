import { isAuthenticated } from "../Controllers/authController.js";

// Middleware para verificar si hay un usuario autenticado
export const authMiddleware = (req, res, next) => {
    if (!isAuthenticated()) {
        return res.status(401).json({ error: "No autorizado" });
    }
    next();
};

import { isAuthenticated } from "../Controllers/authController.js";


export const authMiddleware = (req, res, next) => {
    if (!isAuthenticated()) {
        return res.status(401).json({ error: "No autorizado" });
    }
    next();
};

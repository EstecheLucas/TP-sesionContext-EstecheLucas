import bcrypt from "bcryptjs";

const user = {
    id: 1,
    username: "Lucas",
    email: "lucas@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    role: "admin",
};


let authenticatedUser = null;

export const Login = (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).json({ error: "Usuario no encontrado" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
    }


    authenticatedUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
    };

    res
        .status(200)
        .json({ message: "Inicio de sesión exitoso", user: authenticatedUser });
};

export const isAuthenticated = () => authenticatedUser !== null;

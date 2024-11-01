import React, { useState } from "react";
import { useSession } from "../hooks/useSession.js";

const Login = () => {
  const { login, loading } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="bg-blue-200 border-2 border-blue-400 p-8 shadow-md rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-blue-400 rounded-md focus:outline-double focus:ring focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-blue-400 rounded-md focus:outline-double focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
        {loading && (
          <div className="mt-4 text-center text-gray-700">Procesando...</div>
        )}
      </div>
    </div>
  );
};

export default Login;

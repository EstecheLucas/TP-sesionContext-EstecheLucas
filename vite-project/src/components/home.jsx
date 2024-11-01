import React from "react";
import { useSession } from "../hooks/useSession";

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-200 border-2 border-emerald-300 p-8 shadow-md rounded-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido, <span className="text-emerald-400">{user?.username}</span>
        </h1>
        <button
          onClick={logout}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;

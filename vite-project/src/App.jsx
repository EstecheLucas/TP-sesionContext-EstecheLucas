import React from "react";
import { SessionProvider } from "./context/SessionProvider";
import { useSession } from "./Hooks/useSession";
import Login from "./components/Login";
import Home from "./components/Home";
import "animate.css";

const AppContent = () => {
  const { user } = useSession();
  return user ? <Home /> : <Login />;
};

const App = () => (
  <SessionProvider>
    <AppContent />
  </SessionProvider>
);

export default App;

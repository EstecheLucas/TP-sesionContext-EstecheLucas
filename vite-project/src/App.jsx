import React from "react";
import { SessionProvider } from "./context/SessionProvider";
import { useSession } from "./hooks/useSession";
import Login from "./components/Login";
import Home from "./components/Home";

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

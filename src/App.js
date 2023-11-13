// App.js
import React, { useState } from "react";
import TablaMedicamentos from "./components/pages/TablaMedicamentos";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Simplemente establece el nombre de usuario para este ejemplo, pero aquí es donde harías la lógica real de inicio de sesión
    setUser(username);
  };

  return (
    <div>
      {user ? (
        // Si el usuario está autenticado, muestra la TablaMedicamentos
        <TablaMedicamentos />
      ) : (
        // Si no está autenticado, muestra el componente de Login
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

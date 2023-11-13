import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import backgroundImg from "../img/IMG.1.jpg"; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      alert("Por favor, ingrese un nombre de usuario y contraseña.");
    }
  };

  const handleRegister = () => {
   
    alert("Implementar lógica de registro aquí");
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const transparentCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={transparentCardStyle}>
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Iniciar sesión
                    </button>
                    <div className="mt-3">

                    <Link to="/register" className="btn btn-secondary">
                        Registrarse
                      </Link>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

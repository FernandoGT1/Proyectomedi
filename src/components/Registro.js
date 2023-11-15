// Registro.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/IMG.3.jpg"; // Ajusta la ruta de la imagen de fondo

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password === confirmPassword) {
      alert("Registro exitoso. ¡Redirigiendo al inicio de sesión!");
      navigate("/login");
    } else {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    }
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "blue", // Agrega esta línea para establecer el color de fondo azul
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h2 className="card-title text-center">Registro</h2>
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
                <div className="mb-3">
                  <label className="form-label">Confirmar Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRegister}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

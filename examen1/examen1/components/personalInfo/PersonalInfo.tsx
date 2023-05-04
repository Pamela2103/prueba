import React from "react";

const PersonalInfo = () => {
  return (
    <div className="card .bg-secondary.bg-gradient item">
      <img
        src="foto.png"
        className="rounded-circle"
        style={{ width: "150px", height: "150px" }}
        alt="Foto de Pamela Barrantes Contreras"
      />
      <div className="card-body">
        <h5 className="card-title">Pamela Barrantes Contreras</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Ocupacion:Estudiante Ingeneria en Sistemas de informacion
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Cuidad: Corredores Puntarenas Costa Rica
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Link de linkedin:
        </h6>
        <a href="#" className="card-link">
          https://www.linkedin.com/in/brigitte-barrantes-contreras-22a548274/
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;

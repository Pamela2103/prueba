import React, { useState } from "react";

const CallAction = () => {
  const [showEmail, setShowEmail] = useState(false);
  const handleButtonClick = () => {
    setShowEmail(true);
  };
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-primary btn-lg" onClick={handleButtonClick}>
        ¿Listo para llevar tu proyecto al siguiente nivel? ¡Contrátame ahora mismo!
      </button>
      {showEmail && (
        <p className="mt-3">Envíame un correo a mi correo barrantespamela2103@gmail.com para más información.</p>
      )}
    </div>
  );
};

export default CallAction;

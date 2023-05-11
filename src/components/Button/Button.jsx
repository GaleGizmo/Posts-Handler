import React from "react";
import "./Button.css";
//componente botón con clase, texto y función por props según su ubicación en la web
const Button = ({ onClick, content, specificClass }) => {
  return (
    <div>
      <button onClick={onClick} className={specificClass}>
        {content}
      </button>
    </div>
  );
};

export default Button;

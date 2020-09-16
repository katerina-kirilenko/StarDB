import React from "react";

import "./style.css";
import icon from "../../../assets/death-star.svg";

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt="error icon"></img>
      <span className="boom">Boom!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;
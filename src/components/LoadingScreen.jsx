import React from "react";


function LoadingScreen() {
  return (
    <div className="loading-container">
      {/* Montañita */}
      <svg
        className="mountain"
        width="120"
        height="80"
        viewBox="0 0 180 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 110 L70 40 L120 90 L160 50 L180 110 Z" fill="#754d40ff" />
        <path d="M70 40 L120 90 L90 110 L50 110 Z" fill="#8c5f50" />
      </svg>

      {/* Órbita que gira */}
      <div className="orbit">
        <div className="sun"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
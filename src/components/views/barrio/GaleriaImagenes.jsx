import React, { useState } from "react";
    

const GaleriaImagenes = ({ barrio }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleLoadImage = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="galeria-imagenes">
      {barrio.galeriaImagenes &&
        barrio.galeriaImagenes.map((img, index) => (
          <div className="box" key={index}>
            <img
              src={img}
              alt={`imagen-${index}`}
              className={`box-img ${loadedImages[index] ? "visible" : "hidden"}`}
              onLoad={() => handleLoadImage(index)}
            />

            {!loadedImages[index] && (
              <div className="conteiner-spinner-img">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
};

export default GaleriaImagenes;
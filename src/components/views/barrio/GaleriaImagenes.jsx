import { useState } from "react";
import { optimizarImagen } from "../../../utils/cloudinary"; // Asegúrate que la ruta sea correcta

const GaleriaImagenes = ({ barrio, setSliderVisible, setImagenSeleccionada }) => {
  const [imageStates, setImageStates] = useState({});

  const handleLoadImage = (index, event) => {
    const imgElement = event.target;
    // Cloudinary mantiene el aspect ratio al redimensionar, 
    // así que este cálculo sigue funcionando perfecto.
    const width = imgElement.naturalWidth;
    const height = imgElement.naturalHeight;

    let shape = "standard"; 

    // Ajuste de umbrales para detectar formas
    if (height > width * 1.2) {
      shape = "tall";
    } else if (width > height * 1.2) {
      shape = "wide";
    }

    setImageStates((prev) => ({
      ...prev,
      [index]: { loaded: true, shape: shape },
    }));
  };

  if (!barrio?.galeriaImagenes) return null;

  return (
    <section className="galeria-imagenes">
      {barrio.galeriaImagenes.map((imgUrl, index) => {
        const imgState = imageStates[index] || { loaded: false, shape: "standard" };

        return (
          <div
            className={`box ${imgState.shape}`}
            key={index}
          >
            <img
              // ✅ AQUI ESTÁ LA MAGIA:
              // Pedimos la imagen optimizada a 600px de ancho.
              // Esto hace que la carga inicial de la grilla sea instantánea.
              src={optimizarImagen(imgUrl, 600)} 
              
              alt={`imagen-${index}`}
              className={`box-img ${imgState.loaded ? "visible" : "hidden"}`}
              onLoad={(e) => handleLoadImage(index, e)}
              onClick={() => {
                setImagenSeleccionada(index); 
                setSliderVisible(true);
              }}
              loading="lazy"
            />

            {!imgState.loaded && (
              <div className="conteiner-spinner-img">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default GaleriaImagenes;
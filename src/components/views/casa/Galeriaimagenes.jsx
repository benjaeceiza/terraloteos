import { useState } from "react";


const GaleriaImagenes = ({ casa, setSliderVisible, setImagenSeleccionada }) => {
  // el estado guardará objetos: { loaded: boolean, shape: string }
  const [imageStates, setImageStates] = useState({});

  const handleLoadImage = (index, event) => {
    const imgElement = event.target;
    // Calculamos la relación de aspecto usando las dimensiones naturales de la imagen
    const width = imgElement.naturalWidth;
    const height = imgElement.naturalHeight;

    let shape = "standard"; // Por defecto cuadrado (1x1)

    // Si el alto es notablemente mayor que el ancho (ej. un 20% más), es vertical
    if (height > width * 1.2) {
      shape = "tall";
    }
    // Si el ancho es notablemente mayor que el alto, es horizontal
    else if (width > height * 1.2) {
      shape = "wide";
    }

    setImageStates((prev) => ({
      ...prev,
      [index]: { loaded: true, shape: shape },
    }));
  };

  if (!casa?.galeriaImagenes) return null;

  return (
    <section className="galeria-imagenes galeria-imagenes-casa">
      {casa.galeriaImagenes.map((imgUrl, index) => {
        const imgState = imageStates[index] || { loaded: false, shape: "standard" };

        return (
          <div
            // aplicamos una clase según la forma detectada
            className={`box ${imgState.shape}`}
            key={index}
          >
            <img
              src={imgUrl}
              alt={`imagen-${index}`}
              // Usamos imgState.loaded para la opacidad
              className={`box-img ${imgState.loaded ? "visible" : "hidden"}`}
              // Pasamos el evento 'e' para poder medir la imagen
              onLoad={(e) => handleLoadImage(index, e)}
              onClick={() => {
                setImagenSeleccionada(index); // 1. Guardamos cuál se tocó
                setSliderVisible(true);       // 2. Abrimos el slider
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
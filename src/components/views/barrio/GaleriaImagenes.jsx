import { useState } from "react";
import { optimizarImagen } from "../../../utils/cloudinary"; 


const GaleriaImagenes = ({ barrio, setSliderVisible, setImagenSeleccionada }) => {
  const [imageConfig, setImageConfig] = useState({});

  const handleImageLoad = (index, event) => {
    const img = event.target;
    // Detectamos si es horizontal o vertical
    const isHorizontal = img.naturalWidth > img.naturalHeight;

    setImageConfig((prev) => ({
      ...prev,
      [index]: { 
        loaded: true, 
        // Esta clase definirá cuánto se "estira" la foto
        tipo: isHorizontal ? "horizontal" : "vertical" 
      },
    }));
  };

  if (!barrio?.galeriaImagenes) return null;

  return (
    <section className="galeria-mosaico-fluido">
      {barrio.galeriaImagenes.map((imgUrl, index) => {
        const config = imageConfig[index] || { loaded: false, tipo: "vertical" };

        return (
          <div
            className={`mosaico-item ${config.tipo}`}
            key={index}
            onClick={() => {
              setImagenSeleccionada(index);
              setSliderVisible(true);
            }}
          >
            <img
              // Pedimos calidad media-alta ya que el tamaño es variable
              src={optimizarImagen(imgUrl, 600)} 
              alt={`imagen-${index}`}
              className={`mosaico-img ${config.loaded ? "visible" : "hidden"}`}
              onLoad={(e) => handleImageLoad(index, e)}
              loading="lazy"
            />
            
          

            {!config.loaded && (
              <div className="spinner-center">
                 <div className="spinner-border text-light" role="status"></div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default GaleriaImagenes;
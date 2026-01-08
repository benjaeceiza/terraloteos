import { useState, useEffect } from "react";

// Agregamos la prop 'indiceInicial' con valor por defecto 0
const SliderGaleria = ({ barrio, images = barrio.galeriaImagenes, indiceInicial = 0 }) => {
  
  // Inicializamos el estado con esa prop
  const [index, setIndex] = useState(indiceInicial);
  const [direction, setDirection] = useState(1); 
  const [animating, setAnimating] = useState(false);

  // IMPORTANTE: Esto asegura que si abrís una foto distinta, el slider se actualice
  useEffect(() => {
    setIndex(indiceInicial);
  }, [indiceInicial]);

  const nextSlide = () => {
    setDirection(1);
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setDirection(-1);
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="slider-galeria" style={{ overflow: "hidden", position: "relative" }}>
      <div className="slide-galeria" style={{ width: "100%" }}>
        {/* Agregamos validación por si images[index] no existe al cambiar rápido */}
        {images[index] && (
            <img
            src={images[index]}
            alt={`slide-${index}`}
            style={{
                display: "block",
                transition: "all 0.4s ease-in-out",
                opacity: animating ? 0 : 1,
                transform: animating
                ? `translateX(${direction * -30}px)`
                : "translateX(0)",
            }}
            />
        )}
      </div>

      <button className="btn-galeria prev-galeria" onClick={prevSlide}>
        ‹
      </button>
      <button className="btn-galeria next-galeria" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default SliderGaleria;
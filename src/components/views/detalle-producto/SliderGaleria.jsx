import { useState } from "react";

const SliderGaleria = ({ detalleProducto, images = detalleProducto }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: siguiente, -1: anterior
  const [animating, setAnimating] = useState(false);

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

import {  useRef, useState } from "react";



const SliderGaleria = ({ barrio , images = barrio.galeriaImagenes, interval = 3000}) => {

    const [index, setIndex] = useState(0);


    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="slider-galeria">
            <div
                className="slider-inner-galeria"
                style={{ transform: `translateX(${-index * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div className="slide-galeria" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
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

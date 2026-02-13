import { useState } from "react";


const SliderModalModelos = ({ modelo, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === modelo.galeriaImagenes.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? modelo.galeriaImagenes.length - 1 : prev - 1));
    };

    if (!modelo) return null;

    return (
        <div className="modal-overlay-modelo-vivienda-transportable" onClick={onClose}>
            <div className="modal-content-modelo-vivienda-transportable" onClick={(e) => e.stopPropagation()}>
                
                <button className="btn-close-modelo-vivienda-transportable" onClick={onClose}>&times;</button>
                
                <div className="slider-container-modelo-vivienda-transportable">
                    <img 
                        src={modelo.galeriaImagenes[currentIndex]} 
                        alt={`${modelo.nombre} slide`} 
                        className="slide-img-modelo-vivienda-transportable"
                    />
                    
                    {modelo.galeriaImagenes.length > 1 && (
                        <>
                            <button className="slider-nav-btn-modelo prev" onClick={prevSlide}>&#10094;</button>
                            <button className="slider-nav-btn-modelo next" onClick={nextSlide}>&#10095;</button>
                        </>
                    )}
                </div>

                <div className="info-footer-modelo-vivienda-transportable">
                    <h2>Modelo {modelo.nombre}</h2>
                    <p>{modelo.tipo} • {modelo.metros} m² cubiertos</p>
                </div>
            </div>
        </div>
    );
};

export default SliderModalModelos;
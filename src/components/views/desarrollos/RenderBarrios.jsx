import { useState } from "react";
import { Link } from "react-router-dom";
import barrios from "../../../data/barrios.json";
import { useLoading } from "../../context/LoadingContext";


const RenderBarrios = () => {
    const { showLoader } = useLoading();
    // Estado simple para controlar qué imágenes ya cargaron
    const [imagesLoaded, setImagesLoaded] = useState({});

    const handleImageLoad = (nombre) => {
        setImagesLoaded(prev => ({ ...prev, [nombre]: true }));
    };

    return (
        <section id="section-barrios" className="barrios-grid-container">
            {barrios.map((item) => (
                <Link
                    key={item.nombre}
                    to={`/barrio/${item.nombre}`}
                    onClick={showLoader}
                    className="barrio-card"
                >
                    {/* Contenedor de Imagen con Efecto Zoom */}
                    <div className="barrio-img-wrapper">
                        <img
                            src={item.imgPrincipal}
                            alt={item.nombre}
                            className={`barrio-bg ${imagesLoaded[item.nombre] ? 'loaded' : ''}`}
                            onLoad={() => handleImageLoad(item.nombre)}
                        />
                        
                        {/* Spinner de carga (solo si no ha cargado la imagen) */}
                        {!imagesLoaded[item.nombre] && (
                            <div className="barrio-loader">
                                <div className="spinner-border text-light" role="status"></div>
                            </div>
                        )}
                    </div>

                    {/* Overlay y Contenido (Siempre presentes pero animados) */}
                    <div className="barrio-overlay">
                        <div className="barrio-content">
                            <img
                                className="barrio-logo"
                                src={item.logo}
                                alt={`Logo ${item.nombre}`}
                            />
                            <div className="barrio-cta">
                                <span className="linea-naranja"></span>
                                <span className="texto-ver">VER PROYECTO</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default RenderBarrios;
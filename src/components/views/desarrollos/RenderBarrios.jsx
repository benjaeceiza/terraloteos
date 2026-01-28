import { useState } from "react";
import { Link } from "react-router-dom";
import barrios from "../../../data/barrios.json";
import { useLoading } from "../../context/LoadingContext";
import { optimizarImagen } from "../../../utils/cloudinary"; // Asegúrate de importar esto


const RenderBarrios = () => {
    const { showLoader } = useLoading();
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
                            // Pedimos la imagen optimizada a 600px de ancho (suficiente para la grilla)
                            src={optimizarImagen(item.imgPrincipal, 600)}
                            alt={item.nombre}
                            className={`barrio-bg ${imagesLoaded[item.nombre] ? 'loaded' : ''}`}
                            onLoad={() => handleImageLoad(item.nombre)}
                            loading="lazy"
                        />
                        
                        {/* Spinner de carga */}
                        {!imagesLoaded[item.nombre] && (
                            <div className="barrio-loader">
                                <div className="spinner-border text-light" role="status"></div>
                            </div>
                        )}
                    </div>

                    {/* Overlay y Contenido */}
                    <div className="barrio-overlay">
                        <div className="barrio-content">
                            {/* Logo optimizado también (ancho 300px sobra) */}
                            <img
                                className="barrio-logo"
                                src={optimizarImagen(item.logo, 300)}
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
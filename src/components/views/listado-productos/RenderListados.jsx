import productos from "../../../data/productos.json";
import ubi from "../../../assets/iconos/marcador-de-posicion.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoading } from "../../context/LoadingContext";

const RenderListados = () => {
    const [loadedImages, setLoadedImages] = useState({});
    const { showLoader } = useLoading();

    const handleImageLoad = (nombre) => {
        setLoadedImages((prev) => ({ ...prev, [nombre]: true }));
    };

    return (
        <section id="listado" className="section-productos">
            <div className="header-section">
                <h2>
                    <span className="texto-claro">Nuestros</span>{" "}
                    <span className="texto-destacado">Desarrollos</span>
                </h2>
                <div className="linea-decorativa"></div>
            </div>

            <div className="grid-productos">
                {productos.map((producto) => (
                    <Link
                        to={producto.link}
                        key={producto.nombre}
                        className="card-link"
                        onClick={() => showLoader()}
                    >
                        <article className="card-cinematica">
                            
                            {/* --- Wrapper de Imagen con efecto Zoom --- */}
                            <div className="imagen-wrapper">
                                <img
                                    src={producto.miniatura}
                                    alt={producto.nombre}
                                    className={`imagen-producto ${loadedImages[producto.nombre] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad(producto.nombre)}
                                />
                                {/* Loader interno de la imagen */}
                                {!loadedImages[producto.nombre] && (
                                    <div className="skeleton-loader"></div>
                                )}
                                <div className="overlay-gradiente"></div>
                            </div>

                            {/* --- Info Flotante --- */}
                            <div className="info-content">
                                <div className="info-header">
                                    <h3 className="card-titulo">{producto.nombre}</h3>
                                    <div className="etiqueta-ubicacion">
                                        <img src={ubi} alt="Ubicación" />
                                        <span>{producto.ubicacion}</span>
                                    </div>
                                </div>

                                <div className="info-body">
                                    <p className="card-descripcion">
                                        {producto.descripcion}
                                    </p>
                                    <span className="btn-ver-mas">Ver Proyecto →</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RenderListados;
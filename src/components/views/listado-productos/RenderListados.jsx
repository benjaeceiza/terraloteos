import productos from "../../../data/productos.json";
import expandir from "../../../assets/iconos/expandir.png";
import expandirBlanco from "../../../assets/iconos/expandir-blanco.png";
import ubi from "../../../assets/iconos/marcador-de-posicion.png";
import flecha from "../../../assets/iconos/mas-grande-que.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoading } from "../../context/LoadingContext";

const RenderListados = () => {
    const [isVisible, setIsVisible] = useState("");
    const [buttonExpand, setButtonExpand] = useState("");
    const [loadedImages, setLoadedImages] = useState({}); 
    const { showLoader } = useLoading();

    const handleImageLoad = (nombre) => {
        setLoadedImages((prev) => ({ ...prev, [nombre]: true }));
    };

    return (
        <section id="listado" className="section-productos">
            <h2>
                <span className="fondo-naranja">Nuestros</span>{" "}
                <span className="naranja">Productos</span>.
            </h2>
            <div className="contenedor-productos">
                {productos.map((producto) => (
                    <Link
                        to={producto.link}
                        key={producto.nombre}
                        onClick={() => showLoader()}
                    >
                        <div
                            className="card-producto"
                            onMouseEnter={() => setIsVisible(producto.nombre)}
                            onMouseLeave={() => setIsVisible("")}
                        >
                            {/* --- Imagen de fondo --- */}
                            <img
                                className={
                                    isVisible === producto.nombre
                                        ? "fondo-card-producto-activo"
                                        : "fondo-card-producto"
                                }
                                src={producto.miniatura}
                                alt="desarrollo"
                                onLoad={() => handleImageLoad(producto.nombre)}
                                style={{ display: loadedImages[producto.nombre] ? "block" : "none" }}
                            />

                            {/* --- Loader mientras carga --- */}
                            {!loadedImages[producto.nombre] && (
                                <div className="loader-card">
                                    <div className="spinner-card"></div>
                                </div>
                            )}

                            {/* --- Contenido de la card --- */}
                            {loadedImages[producto.nombre] && (
                                <div className="info-card-producto">
                                    <div
                                        className={
                                            buttonExpand === producto.nombre
                                                ? "contenedor-expandir-icono-active"
                                                : "contenedor-expandir-icono"
                                        }
                                        onMouseEnter={() => setButtonExpand(producto.nombre)}
                                        onMouseLeave={() => setButtonExpand("")}
                                    >
                                        {buttonExpand === producto.nombre ? (
                                            <img src={expandirBlanco} alt="expandir" />
                                        ) : (
                                            <img src={expandir} alt="expandir" />
                                        )}
                                    </div>
                                    <div>
                                        <div>
                                            <div className="titulo-flecha-producto" onClick={() => setIsVisible(producto.nombre)}>
                                                <p className="nombre-card-producto">
                                                    {producto.nombre}
                                                </p>
                                                <img
                                                    className={
                                                        isVisible === producto.nombre
                                                            ? "flecha-card-active"
                                                            : "flecha-card"
                                                    }
                                                    src={flecha}
                                                    alt="Desplegar"
                                                    onClick={() => setIsVisible(producto.nombre)}
                                                />
                                            </div>
                                            <p
                                                className={
                                                    isVisible === producto.nombre
                                                        ? "descripcion-card-producto"
                                                        : "none"
                                                }
                                            >
                                                {producto.descripcion}
                                            </p>
                                        </div>
                                        <div className="contenedor-ubicacion-card-producto">
                                            <img src={ubi} alt="Ubicacion" />
                                            <p>{producto.ubicacion}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RenderListados;

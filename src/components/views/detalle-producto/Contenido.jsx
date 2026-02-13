import { useState } from "react";
import { useLocation } from "react-router-dom";
import lupa from "../../../assets/iconos/lupa.png";
import { optimizarImagen } from "../../../utils/cloudinary"; 
import SliderModalModelos from "./SliderModalModelos"; 
import modelosCasas from "../../../data/viviendasTransportables.json";  

const Contenido = ({ detalleProducto = {}, setSliderVisible }) => {
    const location = useLocation();
    
    const esViviendaTransportable = location.pathname.includes("Vivienda") || detalleProducto.nombre === "Vivienda transportable";

    const images = detalleProducto.cardImages || [];
    const icons = detalleProducto.pricipalesCaracteristicas || [];
    const caracteristicas = detalleProducto.caracterisiticas || [];
    const diferenciales = detalleProducto.diferenciales || [];

    const [modeloSeleccionado, setModeloSeleccionado] = useState(null);

    return (
        <>
            {/* 1. INTRODUCCIÓN */}
            <section className="section-intro">
                <div className="intro-text">
                    <h2>Sobre el Proyecto</h2>
                    <p>{detalleProducto.descripcionLarga}</p>
                </div>
                <div className="intro-image">
                    <img src={images[0] || detalleProducto.logo} alt="Destacado" />
                </div>
            </section>

            {/* 2. ICONOS */}
            {icons.length > 0 && (
                <section className="section-icons">
                    <div className="icons-grid">
                        {icons.map((item, idx) => (
                            <div key={idx} className="icon-item">
                                <img src={item?.icono} alt={item.caracteristica} />
                                <p>{item.caracteristica}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. LOGICA GALERIA */}
            
            {esViviendaTransportable ? (
                // --- GALERÍA ESPECÍFICA (VIVIENDA TRANSPORTABLE) ---
                <section className="galeria-modelo-vivienda-transportable">
                    <h2 className="gallery-title">Nuestros <span>Modelos</span></h2>
                    
                    <div className="grid-modelo-vivienda-transportable">
                        {modelosCasas.map((modelo, idx) => (
                            <div 
                                key={idx} 
                                className="card-modelo-vivienda-transportable"
                                onClick={() => setModeloSeleccionado(modelo)}
                            >
                                <img 
                                    src={optimizarImagen(modelo.imgPrincipal, 600)} 
                                    alt={modelo.nombre} 
                                    className="img-modelo-vivienda-transportable"
                                />
                                <div className="overlay-modelo-vivienda-transportable">
                                    <h3 className="titulo-modelo-vivienda-transportable">{modelo.nombre}</h3>
                                    <span className="subtitulo-modelo-vivienda-transportable">{modelo.tipo} • {modelo.metros}m²</span>
                                    <button className="btn-modelo-vivienda-transportable">Ver Detalles</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {modeloSeleccionado && (
                        <SliderModalModelos 
                            modelo={modeloSeleccionado} 
                            onClose={() => setModeloSeleccionado(null)} 
                        />
                    )}

                </section>
            ) : (
                // --- GALERÍA NORMAL (RESTO DE PRODUCTOS) ---
                images.length > 0 && (
                    <section className="section-gallery">
                        <h2 className="gallery-title">Galería de <span>Imágenes</span></h2>
                        <div className="masonry-grid">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item"
                                    onClick={() => setSliderVisible(true)}
                                >
                                    <img src={img} alt={`Galeria ${idx}`} loading="lazy" />
                                    <div className="gallery-overlay">
                                        <img src={lupa} alt="Ver" className="icon-zoom" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )
            )}

            {/* 4. ESPECIFICACIONES */}
            <section className="section-specs">
                {caracteristicas.length > 0 && (
                    <div className="spec-column">
                        <h3>Características</h3>
                        {caracteristicas.map((item, idx) => (
                            <div key={idx} className="spec-item-producto">
                                <span className="bullet">▸</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                )}
                {diferenciales.length > 0 && (
                    <div className="spec-column">
                        <h3>Diferenciales</h3>
                        {diferenciales.map((item, idx) => (
                            <div key={idx} className="spec-item-producto">
                                <span className="bullet">★</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Contenido;
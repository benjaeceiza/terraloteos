
import { Link } from "react-router-dom";
import lupa from "../../../assets/iconos/lupa.png"; // Icono lupa genérico para el zoom

const Contenido = ({ detalleProducto = {}, setSliderVisible }) => {

    const images = detalleProducto.cardImages || [];
    const icons = detalleProducto.pricipalesCaracteristicas || [];
    const caracteristicas = detalleProducto.caracterisiticas || [];
    const diferenciales = detalleProducto.diferenciales || [];

    return (
        <>
            {/* 1. INTRODUCCIÓN (Split Layout) */}
            <section className="section-intro">
                <div className="intro-text">
                    <h2>Sobre el Proyecto</h2>
                    <p>{detalleProducto.descripcionLarga}</p>
                </div>
                <div className="intro-image">
                    {/* Usamos una imagen destacada o el logo si no hay otra */}
                    <img src={images[0] || detalleProducto.logo} alt="Destacado" />
                </div>
            </section>

            {/* 2. BARRA DE CARACTERÍSTICAS (Iconos) */}
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

            {/* 3. GALERÍA MASONRY */}
            {images.length > 0 && (
                <section className="section-gallery">
                    <h2 className="gallery-title">Galería de <span>Imágenes</span></h2>

                    <div className="masonry-grid">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="gallery-item"
                                onClick={() => setSliderVisible(true)} // Abre el modal
                            >
                                <img src={img} alt={`Galeria ${idx}`} loading="lazy" />
                                <a href={img} target="_blank"><div className="gallery-overlay">
            
                                    <img src={lupa} alt="Ver" className="icon-zoom" />
                                </div></a>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 4. ESPECIFICACIONES TÉCNICAS */}
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
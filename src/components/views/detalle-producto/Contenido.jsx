import React from 'react';

const Contenido = ({ detalleProducto = {}, setSliderVisible }) => {

    // Aseguramos arrays vacíos si no existen datos
    const images = detalleProducto.cardImages || [];
    const icons = detalleProducto.pricipalesCaracteristicas || [];
    const caracteristicas = detalleProducto.caracterisiticas || [];
    const diferenciales = detalleProducto.diferenciales || [];

    // Definimos la clase del tema para el contenedor principal
    const themeClass = detalleProducto.clase ? `theme-${detalleProducto.clase}` : 'theme-default';

    return (
        <section className={`contenido-section ${themeClass}`}>
            
            {/* 1. Descripción Larga */}
            <div className="contenido-intro">
                <p className="texto-descripcion">
                    {detalleProducto.descripcionLarga}
                </p>
                {/* Logo decorativo pequeño */}
                <div className="logo-intro-container">
                    <img src={detalleProducto.logo} alt="Logo Decorativo" />
                </div>
            </div>

            {/* 2. Galería de Imágenes (Grid) */}
            {images.length > 0 && (
                <div className="galeria-grid">
                    {images.map((item, idx) => (
                        <img
                            key={idx} // Usamos índice porque la lista es estática
                            src={item}
                            alt={`${detalleProducto.nombre} - ${idx}`}
                            loading="lazy"
                            onClick={() => setSliderVisible(true)}
                            className="galeria-img"
                        />
                    ))}
                </div>
            )}

            {/* 3. Sección de Características (Fondo con degradado) */}
            <div className="seccion-caracteristicas">
                
                {/* Burbujas de Iconos */}
                {icons.length > 0 && (
                    <div className="burbujas-container">
                        {icons.map((item, idx) => (
                            <div key={idx} className="burbuja-card">
                                <img src={item?.icono} alt={item.caracteristica} />
                                <p>{item.caracteristica}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Textos de Detalles */}
                <div className="textos-detalles">
                    
                    {caracteristicas.length > 0 && (
                        <div className="bloque-texto">
                            <h3 className="titulo-seccion">Características principales</h3>
                            {caracteristicas.map((item, idx) => (
                                <p key={idx} className="parrafo-detalle">{item}</p>
                            ))}
                        </div>
                    )}

                    {diferenciales.length > 0 && (
                        <div className="bloque-texto">
                            <h3 className="titulo-seccion">Diferenciales</h3>
                            {diferenciales.map((item, idx) => (
                                <p key={idx} className="parrafo-detalle">{item}</p>
                            ))}
                        </div>
                    )}

                    <div className="logo-footer-container">
                        <img src={detalleProducto.logo} alt="Logo Final" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contenido;
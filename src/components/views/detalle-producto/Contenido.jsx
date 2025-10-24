

const Contenido = ({ detalleProducto = {},setSliderVisible}) => {


    const images = Array.isArray(detalleProducto.cardImages)
        ? detalleProducto.cardImages
        : [];

    const icons = Array.isArray(detalleProducto.pricipalesCaracteristicas)
        ? detalleProducto.pricipalesCaracteristicas
        :
        [];
    const caracterisiticas = Array.isArray(detalleProducto.caracterisiticas)
        ? detalleProducto.caracterisiticas
        :
        [];
    const diferenciales = Array.isArray(detalleProducto.diferenciales)
        ? detalleProducto.diferenciales
        :
        [];

    return (
        <>
            <section className="contenido-mantra">
                <div className="texto-logo-mantra">
                    <p>
                        {detalleProducto.descripcionLarga}
                    </p>
                </div>

                <div className={`contenedor-imagenes-${detalleProducto.clase}`}>
                    {images.length > 0 ? (
                        images.map((item, idx) => (

                            <img
                                key={item?.toString() ?? idx}
                                src={item}
                                alt={detalleProducto.nombre ?? `imagen-${idx}`}
                                loading="lazy"
                                onClick={() => setSliderVisible(true)}

                            />
                        ))
                    ) : (
                        <p>No hay imágenes disponibles</p>
                    )}
                </div>

                <div className={`caracteristicas-${detalleProducto.clase}`}>
                    <div className="contenedor-burbujas-mantra">

                        {icons.length > 0 ? (
                            icons.map((item) => (

                                <div key={item.caracteristica} className={`burbuja-${detalleProducto.clase}`}>
                                    <img className="icono-burbujar-mantra" src={item.icono} alt="Privacidad" />
                                    <p className={`nombre-burbuja-${detalleProducto.clase}`}>{item.caracteristica}</p>
                                </div>
                            ))
                        ) : (
                            ""
                        )}

                    </div>

                    <div className="contenedor-textos-mantra">
                        <p className={`titulo-parrafo-${detalleProducto.clase}`}>Características principales</p>

                        {caracterisiticas.length > 0 ? (
                            caracterisiticas.map((item) => (

                                <p key={Math.random()}  className={`parrafo-${detalleProducto.clase}`}>{item}</p>
                            )))
                            :
                            (
                                ""
                            )}

                        <p className={`titulo-parrafo-${detalleProducto.clase}`}>Diferenciales</p>
                        {diferenciales.length > 0 ? (
                            diferenciales.map((item) => (

                                <p key={Math.random()} className={`parrafo-${detalleProducto.clase}`}>{item}</p>
                            )))
                            :
                            (
                                ""
                            )}
                    </div>

                    <div className="logo-contenedor-mantra-contenido">
                        <img className={`logo-contenido-${detalleProducto.clase}`} src={detalleProducto.logo} alt="Logo Mantra" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contenido;

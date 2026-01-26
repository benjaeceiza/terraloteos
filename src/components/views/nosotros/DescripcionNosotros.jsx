const DescripcionNosotros = () => {
    return (
        <section id="historia" className="seccion-contenido-nosotros">
            
            {/* 1. INTRODUCCIÓN */}
            <div className="bloque-intro-nosotros">
                <h2 className="titulo-seccion-nosotros">
                    ¿Qué es <span className="texto-naranja">Terraloteos</span>?
                </h2>
                <p className="texto-destacado-nosotros">
                    Somos una empresa líder en urbanización y vivienda llave en mano. 
                    Desde 2010, transformamos el paisaje y la vida de las personas, 
                    desarrollando barrios abiertos y cerrados con un enfoque integral.
                </p>
            </div>

            {/* 2. HISTORIA Y FILOSOFÍA (Tarjetas) */}
            <div className="bloque-historia-nosotros">
                <h3 className="subtitulo-seccion-nosotros">Nuestra Esencia</h3>
                <div className="grid-cards-historia-nosotros">
                    <div className="card-historia-nosotros">
                        <span className="numero-historia-nosotros">01</span>
                        <h4>El Origen</h4>
                        <p>Fundada en Villa Mercedes, San Luis, con el objetivo claro de transformar el acceso a la vivienda propia.</p>
                    </div>
                    <div className="card-historia-nosotros">
                        <span className="numero-historia-nosotros">02</span>
                        <h4>Acompañamiento</h4>
                        <p>Estamos en todas las etapas: elección del lote, diseño personalizado, ejecución de obra y postventa.</p>
                    </div>
                    <div className="card-historia-nosotros">
                        <span className="numero-historia-nosotros">03</span>
                        <h4>Filosofía</h4>
                        <p>Nos basamos en tres pilares fundamentales: transparencia absoluta, accesibilidad financiera y compromiso ambiental.</p>
                    </div>
                </div>
            </div>

            {/* 3. SERVICIOS (Grid Visual) */}
            <div className="bloque-servicios">
                <h3 className="subtitulo-seccion">Qué Ofrecemos</h3>
                <div className="grid-servicios-nosotros">
                    <div className="card-servicio-nosotros">
                        <div className="icono-servicio-nosotros">📍</div>
                        <h4>Venta de Lotes</h4>
                        <p>Ubicaciones estratégicas con proyección de crecimiento.</p>
                    </div>
                    <div className="card-servicio-nosotros">
                        <div className="icono-servicio-nosotros">🔑</div>
                        <h4>Casas Llave en Mano</h4>
                        <p>Nos encargamos de todo, vos solo entrás a vivir.</p>
                    </div>
                    <div className="card-servicio-nosotros">
                        <div className="icono-servicio-nosotros">💰</div>
                        <h4>Financiación Propia</h4>
                        <p>Planes en pesos o dólares adaptados a tu realidad.</p>
                    </div>
                    <div className="card-servicio-nosotros">
                        <div className="icono-servicio-nosotros">🤝</div>
                        <h4>Gestión Integral</h4>
                        <p>Asesoramiento legal, técnico y comercial constante.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DescripcionNosotros;
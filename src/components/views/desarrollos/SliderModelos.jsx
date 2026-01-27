import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import modelos from "../../../data/casas.json";

// Iconos
import reloj from "../../../assets/iconos/reloj-negro.png";
import metros from "../../../assets/iconos/metros.png";
import cama from "../../../assets/iconos/cama.png";


const Slidermodelos = () => {
    const { showLoader } = useLoading();

    // Inicializamos el carrusel de Bootstrap manualmente para evitar bugs
    useEffect(() => {
        const carouselElement = document.getElementById('carouselModelos');
        if (window.bootstrap) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 5000,
                ride: 'carousel',
                pause: 'hover'
            });
        }
    }, []);

    return (
        <section className="section-modelos-premium">
            <div id="carouselModelos" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    {modelos.map((modelo, index) => (
                        <div key={modelo.tipo} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            
                            {/* IMAGEN DE FONDO */}
                            <div className="modelo-img-container">
                                <img src={modelo.imgPrincipal} alt={modelo.tipo} className="modelo-bg-img" />
                                <div className="modelo-overlay"></div>
                            </div>

                            {/* CONTENIDO FLOTANTE */}
                            <Link 
                                to={`/casa/${modelo.tipo}`} 
                                className="modelo-content-link" 
                                onClick={showLoader}
                            >
                                <div className="modelo-info-card">
                                    <span className="modelo-tag">Modelo Disponible</span>
                                    <h2 className="modelo-title">{modelo.tipo}</h2>
                                    
                                    <div className="modelo-specs">
                                        <div className="spec-box">
                                            <img src={reloj} alt="Tiempo" />
                                            <span>{modelo.entrega} días</span>
                                        </div>
                                        <div className="spec-box separator"></div>
                                        <div className="spec-box">
                                            <img src={metros} alt="Metros" />
                                            <span>{modelo.terreno} m²</span>
                                        </div>
                                        <div className="spec-box separator"></div>
                                        <div className="spec-box">
                                            <img src={cama} alt="Habitaciones" />
                                            <span>{modelo.habitaciones} {modelo.habitaciones === 1 ? 'Hab' : 'Habs'}</span>
                                        </div>
                                    </div>

                                    <span className="btn-ver-mas">Ver Detalles &rarr;</span>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>

                {/* CONTROLES DE NAVEGACIÓN MODERNOS */}
                <button className="carousel-control-prev custom-nav-btn" type="button" data-bs-target="#carouselModelos" data-bs-slide="prev">
                    <span className="nav-icon" aria-hidden="true">‹</span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next custom-nav-btn" type="button" data-bs-target="#carouselModelos" data-bs-slide="next">
                    <span className="nav-icon" aria-hidden="true">›</span>
                    <span className="visually-hidden">Siguiente</span>
                </button>

            </div>
        </section>
    );
}

export default Slidermodelos;
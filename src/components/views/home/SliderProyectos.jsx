import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useState } from "react";

// Imágenes
import sliderImg1 from "../../../assets/slider-index/1.jpg";
import sliderImg2 from "../../../assets/slider-index/2.jpeg";
import sliderImg3 from "../../../assets/slider-index/3.jpg";

// Iconos
import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoFacebookN from "../../../assets/iconos/facebook-naranja.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoWtsN from "../../../assets/iconos/wts-naranja.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoIgN from "../../../assets/iconos/instagram-naranja.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";
import iconoTiktokN from "../../../assets/iconos/tiktok-naranja.png";



const SliderProyectos = () => {
    const [isHover, setIsHover] = useState("");
    const { hideLoader, showLoader } = useLoading();

    // 1. Configuración de los Slides (Para no repetir código HTML)
    const slides = [
        {
            id: 1,
            img: sliderImg3,
            titulo: ["Torres", "Community"],
            tipo: "RESIDENCIAL",
            ubicacion: "SAN LUIS",
            link: "/producto/Torres Community"
        },
        {
            id: 2,
            img: sliderImg1,
            titulo: ["Garden", "Village"],
            tipo: "RESIDENCIAL",
            ubicacion: "MERLO, SAN LUIS",
            link: "/producto/Garden Village"
        },
        {
            id: 3,
            img: sliderImg2,
            titulo: ["Atilier", "Estudiantil"],
            tipo: "RESIDENCIAL",
            ubicacion: "SAN LUIS",
            link: "/producto/Atilier Estudiantil"
        }
    ];

    // 2. ARREGLO DEL AUTOPLAY: Forzamos la inicialización con JS
    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleAutoplaying');
        // Verificamos si bootstrap está disponible en window (común en proyectos con CDN o import global)
        if (window.bootstrap) {
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 5000,
                ride: 'carousel',
                pause: false // 'hover' para pausar al pasar el mouse, false para que siga
            });
            carousel.cycle();
        }
    }, []);

    return (
        <section className="slider-container">
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="5000">
                            <div className="slide-wrapper">
                                {/* Imagen con efecto Zoom */}
                                <div className="img-container">
                                    <img src={slide.img} className="img-fluid" alt={slide.titulo.join(" ")} onLoad={index === 0 ? hideLoader : undefined} />
                                    <div className="overlay-dark"></div>
                                </div>

                                {/* Contenido */}
                                <Link to={slide.link} className="slide-content" onClick={showLoader}>
                                    <div className="text-box animate-fade-up">
                                        <h2 className="slide-title">
                                            {slide.titulo[0]}<br />
                                            <span className="text-highlight">{slide.titulo[1]}</span>
                                        </h2>
                                        
                                        <div className="slide-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">TIPO DE PROYECTO /</span>
                                                <span className="meta-value">{slide.tipo}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">UBICACIÓN /</span>
                                                <span className="meta-value">{slide.ubicacion}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botones de Navegación (Estilo Glass) */}
                <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <div className="control-box">
                        <span className="control-text">ANTERIOR</span>
                    </div>
                </button>
                <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <div className="control-box">
                        <span className="control-text">SIGUIENTE</span>
                    </div>
                </button>

                {/* Footer del Slider (Botones y Redes) */}
                <div className="slider-footer">
                    <div className="footer-actions">
                        <Link className="btn-slider-outline" to={"/listado-productos"} onClick={showLoader}>Ver Proyectos</Link>
                        <Link className="btn-slider-solid" to={"/contacto"} onClick={showLoader}>Contactar</Link>
                    </div>

                    <ul className="footer-socials">
                        <li>
                            <a href="https://facebook.com/loteosterra" target="_blank" rel="noreferrer"
                               onMouseEnter={() => setIsHover("facebook")} onMouseLeave={() => setIsHover("")}>
                                <img src={isHover === "facebook" ? iconoFacebookN : iconoFacebook} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"
                               onMouseEnter={() => setIsHover("instagram")} onMouseLeave={() => setIsHover("")}>
                                <img src={isHover === "instagram" ? iconoIgN : iconoIg} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer"
                               onMouseEnter={() => setIsHover("tiktok")} onMouseLeave={() => setIsHover("")}>
                                <img src={isHover === "tiktok" ? iconoTiktokN : iconoTiktok} alt="TikTok" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer"
                               onMouseEnter={() => setIsHover("whatsapp")} onMouseLeave={() => setIsHover("")}>
                                <img src={isHover === "whatsapp" ? iconoWtsN : iconoWts} alt="WhatsApp" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default SliderProyectos;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";

// Iconos
import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoFacebookN from "../../../assets/iconos/facebook-naranja.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoWtsN from "../../../assets/iconos/wts-naranja.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoIgN from "../../../assets/iconos/instagram-naranja.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";
import iconoTiktokN from "../../../assets/iconos/tiktok-naranja.png";

// 1. Micro-componente aislado para que el hover no re-renderice todo el slider
const IconoRedSocial = ({ link, iconoNormal, iconoHover, alt }) => {
    const [hover, setHover] = useState(false);
    return (
        <li>
            <Link to={link} target="_blank" rel="noreferrer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <img src={hover ? iconoHover : iconoNormal} alt={alt} />
            </Link>
        </li>
    );
};

const SliderProyectos = () => {
    // Ya no necesitamos el estado "isHover" acá
    const { hideLoader, showLoader } = useLoading();

    // 2. Configuración de los Slides
    const slides = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1771003042/Viviendas_Terraloteos_11zon_l8gab9.webp",
            titulo: ["Vivienda", "Transportable"],
            tipo: "RESIDENCIAL",
            ubicacion: "A TODO EL PAÍS",
            link: "/producto/Vivienda Transportable"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527822/IMG_0044_bjxpyn.jpg",
            titulo: ["Torres", "Community"],
            tipo: "RESIDENCIAL",
            ubicacion: "LA PUNTA, SAN LUIS",
            link: "/producto/Torres Community"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527600/5_zgdtvv.png",
            titulo: ["Garden", "Village"],
            tipo: "RESIDENCIAL",
            ubicacion: "MERLO, SAN LUIS",
            link: "/producto/Garden Village"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527519/AtilierEstudiantil_8_-_Photo_h3fbrt.jpg",
            titulo: ["Atelier", "Estudiantil"],
            tipo: "RESIDENCIAL",
            ubicacion: "MERLO, SAN LUIS",
            link: "/producto/Atelier Estudiantil"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527435/mantrax_Photo_-_7_khysau.jpg",
            titulo: ["Mantra", "Cabañas"],
            tipo: "RESIDENCIAL",
            ubicacion: "MERLO, SAN LUIS",
            link: "/producto/Mantra, Cabañas Premiun"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527686/00-render_obsm7b.jpg",
            titulo: ["Paseo", "Conlara"],
            tipo: "COMERCIAL",
            ubicacion: "SANTA ROSA DE CONLARA",
            link: "/producto/Paseo Conlara"
        },
        {
            id: 7,
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769527114/5_e310gu.jpg",
            titulo: ["El Viejo", "Mercado"],
            tipo: "COMERCIAL",
            ubicacion: "LA PUNTA, SAN LUIS",
            link: "/producto/El Viejo Mercado"
        },

    ];

    // 3. ARREGLO DEL AUTOPLAY y CLEANUP: Forzamos la inicialización con JS
    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleAutoplaying');
        let carouselInstance = null;

        if (window.bootstrap && carouselElement) {
            carouselInstance = new window.bootstrap.Carousel(carouselElement, {
                interval: 5000,
                ride: 'carousel',
                pause: false // 'hover' para pausar al pasar el mouse, false para que siga
            });
            carouselInstance.cycle();
        }

        // Limpiamos la instancia de Bootstrap cuando salimos de la página
        return () => {
            if (carouselInstance) {
                carouselInstance.dispose();
            }
        };
    }, []);

    return (
        <section className="slider-container">
            {/* OJO ACÁ: Se eliminó el data-bs-ride="carousel" para no hacer doble inicialización */}
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade">

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
                        <IconoRedSocial
                            link="https://facebook.com/loteosterra"
                            iconoNormal={iconoFacebook}
                            iconoHover={iconoFacebookN}
                            alt="Facebook"
                        />
                        <IconoRedSocial
                            link="https://www.instagram.com/terraloteos/"
                            iconoNormal={iconoIg}
                            iconoHover={iconoIgN}
                            alt="Instagram"
                        />
                        <IconoRedSocial
                            link="https://www.tiktok.com/@terraloteosoficial"
                            iconoNormal={iconoTiktok}
                            iconoHover={iconoTiktokN}
                            alt="TikTok"
                        />
                        <IconoRedSocial
                            link="https://wa.me/5492657604317"
                            iconoNormal={iconoWts}
                            iconoHover={iconoWtsN}
                            alt="WhatsApp"
                        />
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default SliderProyectos;
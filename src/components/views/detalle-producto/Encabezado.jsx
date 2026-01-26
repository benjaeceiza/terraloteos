import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";

const Encabezado = ({ detalleProducto }) => {
    const { hideLoader, showLoader } = useLoading();

    // Si no hay clase definida, usamos una por defecto para que no rompa
    const themeClass = detalleProducto.clase ? `theme-${detalleProducto.clase}` : 'theme-default';

    return (
        /* Agregamos la clase del tema al contenedor padre */
        <section className={`encabezado-hero ${themeClass}`}>
            
            {/* Imagen de fondo con overlay oscuro integrado en CSS */}
            <div className="hero-background">
                <img 
                    src={detalleProducto.imgEncabezado} 
                    alt={`Fondo ${detalleProducto.nombre}`} 
                    onLoad={hideLoader}
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                
                {/* Logo Principal */}
                <div className="hero-logo-container animate-up">
                    <img className="hero-logo" src={detalleProducto.logo} alt="Logo Proyecto" />
                </div>

                {/* Redes Sociales */}
                <ul className="hero-socials animate-up delay-1">
                    <li>
                        <a href="https://www.facebook.com/loteosterra" target="_blank" rel="noreferrer">
                            <img src={iconoFacebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/terraloteos" target="_blank" rel="noreferrer">
                            <img src={iconoIg} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@terraloteosoficial" target="_blank" rel="noreferrer">
                            <img src={iconoTiktok} alt="TikTok" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/" target="_blank" rel="noreferrer">
                            <img src={iconoWts} alt="Whatsapp" />
                        </a>
                    </li>
                </ul>

                {/* Botones de Acción */}
                <div className="hero-actions animate-up delay-2">
                    <Link 
                        to="/contacto" 
                        className="btn-hero btn-primary" 
                        onClick={() => showLoader()}
                    >
                        Contactar Asesor
                    </Link>
                    
                    {detalleProducto.brochure && (
                        <a 
                            className="btn-hero btn-outline" 
                            href={detalleProducto.brochure} 
                            download={`${detalleProducto.nombre}.pdf`}
                        >
                            Descargar Brochure
                        </a>
                    )}
                </div>

            </div>
        </section>
    );
}

export default Encabezado;
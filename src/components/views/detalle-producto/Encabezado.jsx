import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";

const Encabezado = ({ detalleProducto }) => {
    const { hideLoader, showLoader } = useLoading();

    return (
        <section className="encabezado-hero">
            <div className="hero-background">
                <img 
                    src={detalleProducto.imgEncabezado} 
                    alt={detalleProducto.nombre} 
                    onLoad={hideLoader}
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <img className="hero-logo animate-up" src={detalleProducto.logo} alt="Logo" />
                
                <ul className="hero-socials animate-up delay-1">
                    <li><a href="https://facebook.com"><img src={iconoFacebook} alt="FB"/></a></li>
                    <li><a href="https://instagram.com"><img src={iconoIg} alt="IG"/></a></li>
                    <li><a href="https://tiktok.com"><img src={iconoTiktok} alt="TT"/></a></li>
                    <li><a href="https://wa.me"><img src={iconoWts} alt="WA"/></a></li>
                </ul>

                <div className="hero-actions animate-up delay-2">
                    <Link to="/contacto" className="btn-premium btn-filled" onClick={showLoader}>
                        Contactar Asesor
                    </Link>
                    {detalleProducto.brochure && (
                        <a className="btn-premium btn-outline" href={detalleProducto.brochure} download>
                            Descargar Brochure
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Encabezado;
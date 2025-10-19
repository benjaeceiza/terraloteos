import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";
import iconoLocation from "../../../assets/iconos/marcador-de-posicion.png";
import { Link } from "react-router-dom";
import fondo from "../../../assets/encabezados/mantra.jpg";
import logo from "../../../assets/logos/mantra.png";
import { useLoading } from "../../context/LoadingContext";

const Encabezado = () => {

     const { hideLoader } = useLoading();
  

    return (
        <>

            <section className="encabezado-mantra">
                <img className="fondo-mantra" src={fondo} alt="Fondo" onLoad={hideLoader}/>
                <div className="data-encabezado-mantra">
                    <div className="nombre-redes-mantra">
                        <img className="logo-encabezado-mantra" src={logo} alt="Logo Mantra" />
                        <ul className="lista-redes-mantra">
                            <li><Link to={"https://www.facebook.com/loteosterra"}><img className="icono-red-mantra" src={iconoFacebook} alt="Facebook" /></Link></li>
                            <li><Link to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}><img className="icono-red-mantra" src={iconoIg} alt="instagram" /></Link></li>
                            <li><Link to={"https://www.tiktok.com/@terraloteosoficial?is_from_webapp=1&sender_device=pc"}><img className="icono-red-mantra" src={iconoTiktok} alt="Tiktok" /></Link></li>
                            <li><Link><img className="icono-red-mantra" src={iconoWts} alt="Whatsapp" /></Link></li>
                        </ul>
                      
                    </div>
                    <div className="botones-mantra-encabezado">
                        <Link to={"/contacto"} className="boton-mantra">Contactar</Link>
                        <a  className="boton-mantra" href="../../../../../public/pdf/mantra.pdf" download={"mantra.pdf"}>Descargar Broshure</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Encabezado;
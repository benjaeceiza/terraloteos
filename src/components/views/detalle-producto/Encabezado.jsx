import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";

const Encabezado = ({detalleProducto}) => {
     
    
    
     const { hideLoader } = useLoading();

    return (
        <>

            <section className="encabezado-mantra">
                <img className="fondo-mantra" src={detalleProducto.imgEncabezado} alt="Fondo" onLoad={hideLoader}/>
                <div className="data-encabezado-mantra">
                    <div className={`nombre-redes-${detalleProducto.clase}` }>
                        <img className={`logo-encabezado-${detalleProducto.clase}`} src={detalleProducto.logo} alt="Logo Mantra" />
                        <ul className="lista-redes-mantra">
                            <li><Link to={"https://www.facebook.com/loteosterra"}><img className="icono-red-mantra" src={iconoFacebook} alt="Facebook" /></Link></li>
                            <li><Link to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}><img className="icono-red-mantra" src={iconoIg} alt="instagram" /></Link></li>
                            <li><Link to={"https://www.tiktok.com/@terraloteosoficial?is_from_webapp=1&sender_device=pc"}><img className="icono-red-mantra" src={iconoTiktok} alt="Tiktok" /></Link></li>
                            <li><Link><img className="icono-red-mantra" src={iconoWts} alt="Whatsapp" /></Link></li>
                        </ul>
                      
                    </div>
                    <div className="botones-mantra-encabezado">
                        <Link to={"/contacto"} className={`boton-${detalleProducto.clase}`}>Contactar</Link>
                        <a  className={`boton-${detalleProducto.clase}`} href={detalleProducto.broshure} download={"mantra.pdf"}>Descargar Broshure</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Encabezado;
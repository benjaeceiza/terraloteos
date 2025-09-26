import { Link } from "react-router-dom";
import fondo from "../../../assets/slider-index/3.jpg";
import iconoFacebook from "../../../assets/iconos/facebook.png";
import iconoFacebookN from "../../../assets/iconos/facebook-naranja.png";
import iconoWts from "../../../assets/iconos/whatsapp.png";
import iconoWtsN from "../../../assets/iconos/wts-naranja.png";
import iconoIg from "../../../assets/iconos/instagram.png";
import iconoIgN from "../../../assets/iconos/instagram-naranja.png";
import iconoTiktok from "../../../assets/iconos/tiktok.png";
import iconoTiktokN from "../../../assets/iconos/tiktok-naranja.png";
import iconoLocation from "../../../assets/iconos/marcador-de-posicion.png";
import logo from "../../../assets/logos/logo-corto.png";
import { useState } from "react";

const Encabezado = () => {

    const [isHover, setIsHover] = useState("")

    return (
        <>
            <section className="section-encabezado-producto">
                <img className="fondo-encabezado-producto" src={fondo} alt="" />
                <div className="fondo-negro-encabezado-producto">
                    <div className="contenedor-data-producto-encabezado">
                        <p className="tipo-producto-encabezado">PROYECTO COMERCIAL</p>
                        <div className="contenedor-titulo-encabezado-producto">
                            <p className="titulo-producto-encabezado">Torres</p>
                            <p className="titulo-producto-encabezado">Community</p>
                        </div>
                        <ul className="lista-redes-encabezado-producto">
                            <li>
                                <Link
                                    to={"https://www.facebook.com/loteosterra"}
                                    target="_blank"
                                    onMouseEnter={() => setIsHover("facebook")}
                                    onMouseLeave={() => setIsHover("")}>
                                    {
                                        isHover == "facebook"
                                            ?
                                            <img className="red-social-encabeza-producto" src={iconoFacebookN} alt="Icono Facebook" />
                                            :
                                            <img className="red-social-encabeza-producto" src={iconoFacebook} alt="Icono Facebook" />
                                    }
                                </Link></li>
                            <li>
                                <Link
                                    to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                                    target="_blank"
                                    onMouseEnter={() => setIsHover("instagram")}
                                    onMouseLeave={() => setIsHover("")}>
                                    {
                                        isHover == "instagram"
                                            ?
                                            <img className="red-social-encabeza-producto" src={iconoIgN} alt="Icono Instagram" />
                                            :
                                            <img className="red-social-encabeza-producto" src={iconoIg} alt="Icono Instagram" />
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"https://www.tiktok.com/@terraloteosoficial?is_from_webapp=1&sender_device=pc"}
                                    target="blank"
                                    onMouseEnter={() => setIsHover("tiktok")}
                                    onMouseLeave={() => setIsHover("")}>
                                    {
                                        isHover == "tiktok"
                                            ?
                                            <img className="red-social-encabeza-producto" src={iconoTiktokN} alt="Icono Tiktok" />
                                            :
                                            <img className="red-social-encabeza-producto" src={iconoTiktok} alt="Icono Tiktok" />
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={""}
                                    target="_blank"
                                    onMouseEnter={() => setIsHover("whatsapp")}
                                    onMouseLeave={() => setIsHover("")}>
                                    {
                                        isHover == "whatsapp"
                                            ?
                                            <img className="red-social-encabeza-producto" src={iconoWtsN} alt="Icono Whatsapp" />
                                            :
                                            <img className="red-social-encabeza-producto" src={iconoWts} alt="Icono Whatsapp" />
                                    }
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="contenedor-ubicacion-producto-encabezado">
                    <div className="contenedor-flex">
                        <div className="contenedor-logo-terra-encabezado">
                            <img src={logo} alt="" />
                        </div>
                        <div className="contenedor-ubicacion-frase">
                            <div className="icono-ubicacion-producto-contenedor">
                                <img src={iconoLocation} alt="" />
                                <p className="ubicacion-producto-encabezado">MERLO, SAN LUIS</p>
                            </div>
                            <p className="frase-encabezado">Ideal para quienes buscan vivir bien</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Encabezado;
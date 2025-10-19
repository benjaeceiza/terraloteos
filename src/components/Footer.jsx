import sliderImg from "../assets/slider-index/2.jpeg"
import iconoFacebook from "../assets/iconos/facebook.png";
import iconoFacebookN from "../assets/iconos/facebook-naranja.png";
import iconoWts from "../assets/iconos/whatsapp.png";
import iconoWtsN from "../assets/iconos/wts-naranja.png";
import iconoIg from "../assets/iconos/instagram.png";
import iconoIgN from "../assets/iconos/instagram-naranja.png";
import iconoTiktok from "../assets/iconos/tiktok.png";
import iconoTiktokN from "../assets/iconos/tiktok-naranja.png";
import { Link, useLocation } from "react-router-dom"
import { useState } from "react";



const Footer = () => {

    const [isHover,setIsHover] = useState("");
    
    const location = useLocation();
   
    

    return (
        <footer className="footer">
            <div className="footer-redes">
                <ul className="footer-lista">
                    <li className="footer-item">
                        <Link
                         to={"https://www.facebook.com/loteosterra"}
                         target="_blank"
                         onMouseEnter={() => setIsHover("facebook")}
                         onMouseLeave={() => setIsHover("")}>
                            {
                                isHover == "facebook"
                                ?
                                <img className="img-footer" src={iconoFacebookN} alt="Icono Facebook" />
                                :
                                <img className="img-footer" src={iconoFacebook} alt="Icono Facebook" />
                            }
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                         to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                         target="_blank"
                         onMouseEnter={() => setIsHover("instagram")}
                         onMouseLeave={() => setIsHover("")}>
                            {
                                isHover == "instagram"
                                ?
                                <img className="img-footer" src={iconoIgN} alt="Icono Instagram" />
                                :
                                <img className="img-footer" src={iconoIg} alt="Icono Instagram" />
                            }
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                         to={"https://www.tiktok.com/@terraloteosoficial?is_from_webapp=1&sender_device=pc"}
                         target="_blank"
                         onMouseEnter={() => setIsHover("tiktok")}
                         onMouseLeave={() => setIsHover("")}>
                            {
                                isHover == "tiktok"
                                ?
                                <img className="img-footer" src={iconoTiktokN} alt="Icono Tiktok" />
                                :
                                <img className="img-footer" src={iconoTiktok} alt="Icono Tiktok" />
                            }
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                         to={""}
                         target="_blank"
                         onMouseEnter={() => setIsHover("whatsapp")}
                         onMouseLeave={() => setIsHover("")}>
                            {
                                isHover == "whatsapp"
                                ?
                                <img className="img-footer" src={iconoWtsN} alt="Icono Whatsapp" />
                                :
                                <img className="img-footer" src={iconoWts} alt="Icono Whatsapp" />
                            }
                        </Link>
                    </li>
                </ul>
                <p className="derechos">© 2025 Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;

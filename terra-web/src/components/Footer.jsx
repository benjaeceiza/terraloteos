import sliderImg from "../assets/slider-index/2.jpeg"
import iconoFacebook from "../assets/iconos/facebook.png"
import iconoWts from "../assets/iconos/whatsapp.png"
import iconoIg from "../assets/iconos/instagram.png"
import iconoX from "../assets/iconos/x.png"



const Footer = () => {
   
    return(
       <footer className="footer">
        <div className="footer-redes">
            <ul className="footer-lista">
                <li className="footer-item"><a href=""><img className="img-footer" src={iconoFacebook}
                            alt=""/></a>
                </li>
                <li className="footer-item"><a href=""><img className="img-footer"
                            src={iconoIg} alt=""/></a></li>
                <li className="footer-item"><a href=""><img className="img-footer" src={iconoX}
                            alt=""/></a>
                </li>
                <li className="footer-item"><a href=""><img className="img-footer" src={iconoWts} alt=""/></a>
                </li>
            </ul>
            <p className="derechos">© 2025 Todos los derechos reservados</p>
        </div>
    </footer>
    )
}

export default Footer;

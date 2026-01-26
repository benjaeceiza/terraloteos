import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import fondo from "../../../assets/encabezados/ser-socio.jpg";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";

const Encabezado = () => {
    const { hideLoader } = useLoading();

    // Función de scroll suave reutilizable
    const handleScrollDown = () => {
        const section = document.querySelector("#que-es");
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-socio">
            {/* Fondo con Overlay */}
            <div className="hero-socio-background">
                <img 
                    src={fondo} 
                    alt="Desarrollo Inmobiliario" 
                    onLoad={hideLoader} 
                />
                <div className="overlay-gradiente-socio"></div>
            </div>

            <div className="hero-socio-content">
                <div className="hero-text-wrapper">
                    
                    <h1 className="hero-title animate-fade-down">
                        Invertí en un desarrollo <br />
                        <span className="text-orange">urbanístico</span>
                    </h1>
                    
                    <div className="hero-description-box animate-fade-up delay-1">
                        <p>
                            Acá podés participar como inversor en la creación de un nuevo barrio: 
                            ingresando con capital, aportando obra o sumándote a una sociedad de desarrollo. 
                            Esta modalidad permite asegurar mejores precios, controlar plazos, y obtener 
                            una rentabilidad mayor a la media del mercado.
                        </p>
                    </div>

                    <Link to="/contacto" className="btn-hero-socio animate-fade-up delay-2">
                        Contactar Asesor
                    </Link>
                </div>

                {/* Flecha Animada */}
                <div className="scroll-arrow-container animate-fade-in delay-3" onClick={handleScrollDown}>
                    <span>Conocé Más</span>
                    <img src={flecha} alt="Bajar" className="bounce-arrow" />
                </div>
            </div>
        </section>
    );
}

export default Encabezado;
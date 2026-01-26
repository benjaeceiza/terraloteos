import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import fondo from "../../../assets/encabezados/listado.png";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";

const Encabezado = () => {
    const { hideLoader } = useLoading();

    const handleScrollDown = () => {
        const section = document.querySelector("#listado");
        if (section) {
            // El offset -80 es para que el menú de arriba no tape el título del listado
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-socio">
            <div className="hero-socio-background">
                <img
                    src={fondo}
                    alt="Fondo invertir en un desarrollo"
                    onLoad={hideLoader}
                />
                <div className="overlay-gradiente-socio"></div>
            </div>

            <div className="hero-socio-content">
                <div className="hero-text-wrapper">
                    <h1 className="hero-title animate-fade-down">
                        Invertí en productos <span className="text-orange">Terraloteos</span>
                    </h1>

                    <div className="hero-description-box animate-fade-up delay-1">

                        <p>
                            ¿Buscás invertir en ladrillos? En esta sección vas a encontrar nuestros
                            productos inmobiliarios con proyección y/o renta. Departamentos, dormis,
                            complejos de cabañas, locales y mucho más.
                        </p>
                    </div>


                    <Link to="/contacto" className="btn-hero-socio animate-fade-up delay-2">
                        Contactar Asesor
                    </Link>
                </div>

                {/* Flecha animada */}
                <div className="scroll-arrow-container animate-fade-in delay-3" onClick={handleScrollDown}>
                    <span>Ver Productos</span>
                    <img src={flecha} alt="Bajar" className="bounce-arrow" />
                </div>
            </div>
        </section>
    );
}

export default Encabezado;
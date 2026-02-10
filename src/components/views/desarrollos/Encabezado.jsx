import fondo from "../../../assets/encabezados/desarrollos.jpeg";
import { useLoading } from "../../context/LoadingContext";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";

const Encabezado = () => {
    const { hideLoader } = useLoading();

    const handleScrollDown = () => {
        // Ahora buscamos la sección nueva por ID
        const section = document.getElementById("info-desarrollos");
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-desarrollos">
            {/* Fondo Ken Burns */}
            <div className="hero-bg-wrapper-desarrollos">
                <img
                    className="hero-bg-img-desarrollos"
                    src={fondo}
                    alt="Fondo Desarrollos"
                    onLoad={hideLoader}
                />
                <div className="hero-overlay-gradient-desarrollos"></div>
            </div>

            {/* Contenido Principal Limpio */}
            <div className="hero-content-wrapper-desarrollos">
                <div className="main-title-box-desarrollos animate-fade-up">
                    <h1>
                        VIVÍ EN <span className="text-orange">NUESTROS</span> DESARROLLOS
                    </h1>
                    <p className="hero-description-desarrollos">
                        En Terraloteos desarrollamos barrios donde la naturaleza y el
                        progreso se encuentran. Si estás buscando un lugar para vivir,
                        descansar o comenzar una nueva vida, este es tu espacio.
                    </p>
                </div>

                {/* Flecha para bajar */}
                <div className="scroll-arrow-container-desarrollos animate-fade-in delay-3" onClick={handleScrollDown}>
                    <span>Descubrir Más</span>
                    <img src={flecha} alt="Bajar" className="bounce-arrow" />
                </div>
            </div>
        </section>
    );
};

export default Encabezado;
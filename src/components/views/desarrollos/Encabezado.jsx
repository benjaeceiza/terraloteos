import fondo from "../../../assets/encabezados/desarrollos.jpeg";
import { useLoading } from "../../context/LoadingContext";
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
        <section className="hero-desarrollos">
            {/* Imagen de fondo con efecto Ken Burns y Overlay */}
            <div className="hero-bg-wrapper-desarrollos">
                <img
                    className="hero-bg-img-desarrollos"
                    src={fondo}
                    alt="Fondo Desarrollos"
                    onLoad={hideLoader}
                />
                <div className="hero-overlay-gradient-desarrollos"></div>
            </div>

            {/* Contenido Principal */}
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

                {/* Tarjetas de Información Inferiores */}
                <div className="info-cards-container-desarrollos animate-fade-up delay-1">

                    {/* Tarjeta 1 */}
                    <div className="info-card-desarrollos">
                        <h3 className="card-title-desarrollos">
                            <span className="accent-bar-desarrollos"></span>
                            Desarrollos Urbanísticos
                        </h3>
                        <p className="card-text-desarrollos">
                            Abiertos y privados, en entornos naturales únicos, con
                            infraestructura y servicios propios. Podés comprar tu lote y
                            elegir entre distintos modelos de vivienda.
                        </p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="info-card-desarrollos">
                        <h3 className="card-title-desarrollos">
                            <span className="accent-bar-desarrollos"></span>
                            Planes Flexibles
                        </h3>
                        <p className="card-text-desarrollos">
                            Nuestros planes de construcción son escalonados y pensados para
                            que puedas mudarte con el 60% del valor abonado. El resto lo
                            financiás con tranquilidad.
                        </p>
                    </div>

                </div>
                <div className="scroll-arrow-container-desarrollos animate-fade-in delay-3" onClick={handleScrollDown}>
                    <span>Ver Productos</span>
                    <img src={flecha} alt="Bajar" className="bounce-arrow" />
                </div>
            </div>
        </section>
    );
};

export default Encabezado;

import fondo from "../../../assets/encabezados/vivir.jpeg";
import logo from "../../../assets/logos/fundacion.webp";
import { useLoading } from "../../context/LoadingContext";
import fleca from "../../../assets/iconos/flecha-hacia-abajo.png"


const Encabezado = () => {

    const { hideLoader } = useLoading();

    const handleScroll = () => {
        const section = document.querySelector("#info-data");
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="encabezado-fundacion">
                <img className="fondo-encabezado-fundacion" src={fondo} alt="" onLoad={hideLoader} />
                <div className="contenedor-logo-fundacion">
                    <img className="logo-fundacion animate-up" src={logo} alt="" />
                    <h1 className="animate-up">Sembramos <span className="naranja">futuro</span>, construimos <span className="naranja">conciencia</span>.</h1>
                </div>

                <div className="scroll-btn-nosotros scroll-fundacion animate-up delay-2 " onClick={handleScroll}>
                    <span>Conocé más</span>
                    <img src={fleca} alt="Bajar" />
                </div>
            </section>
        </>
    )
}

export default Encabezado;
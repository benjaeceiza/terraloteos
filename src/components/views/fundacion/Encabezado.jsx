
import fondo from "../../../assets/encabezados/vivir.jpeg";
import logo from "../../../assets/logos/fundacion.webp";
import { useLoading } from "../../context/LoadingContext";
import fleca from "../../../assets/iconos/flecha-hacia-abajo.png"


const Encabezado = () => {

    const { hideLoader } = useLoading();

    return (
        <>
            <section className="encabezado-fundacion">
                <img className="fondo-encabezado-fundacion" src={fondo} alt="" onLoad={hideLoader} />
                <div className="contenedor-logo-fundacion">
                    <img className="logo-fundacion" src={logo} alt="" />
                    <h1>Sembramos <span className="naranja">futuro</span>, construimos <span className="naranja">conciencia</span>.</h1>
                    <div className="contenedor-boton-flecha"
                        onClick={() => {
                            const section = document.querySelector("#info-data");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}

                    >
                        <img className="flecha-encabezado-mobile" src={fleca} alt="flecha hacia abajo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Encabezado;
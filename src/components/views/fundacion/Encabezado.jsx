
import fondo from "../../../assets/encabezados/vivir.jpeg";
import logo from "../../../assets/logos/fundacion.webp";
import { useLoading } from "../../context/LoadingContext";


const Encabezado = () => {

    const { hideLoader } = useLoading();

    return (
        <>
            <section className="encabezado-fundacion">
                <img className="fondo-encabezado-fundacion" src={fondo} alt="" onLoad={hideLoader} />
                <div className="contenedor-logo-fundacion">
                    <img className="logo-fundacion" src={logo} alt="" />
                </div>
            </section>
        </>
    )
}

export default Encabezado;
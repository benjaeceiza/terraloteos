

import { Link } from "react-router-dom";
import fondo from "../../../assets/encabezados/listado.png";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";
import { useLoading } from "../../context/LoadingContext";

const Encabezado = () => {
    const { hideLoader } = useLoading();
    return (
        <>
            <section className="encabezado-listado">
                <img className="fondo-encabezado-listado" src={fondo} alt="Fondo invertir en un desarrollo" onLoad={hideLoader} />
                <div className="data-encabezado-listado">
                    <div className="textos-flecha">
                        <div className="contenedor-textos-encabezado-listado">
                            <h1>Invertí en productos <span className="naranja">Terraloteos</span></h1>
                            <p>¿Buscás invertir en ladrillos? En esta sección vas a encontrar nuestros productos inmobiliarios
                                con proyección y/o renta. Departamentos, dormis, complejos de cabañas, locales y mucho más.</p>
                            <Link className="boton-encabezado-listado" to={"/contacto"}>Contactar</Link>
                        </div>
                        <div className="contenedor-flecha"
                            onClick={() => {
                                const section = document.querySelector("#listado");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>
                            <img src={flecha} alt="Ir hacia abajo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Encabezado;
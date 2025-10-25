
import { useLoading } from "../../context/LoadingContext";
import fondo from "../../../assets/encabezados/ser-socio.jpg"
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";
import { Link } from "react-router-dom";

const Encabezado = () => {


    const { hideLoader } = useLoading();



    return (
        <>
            <section className="contenedor-encabezado-ser-socio">
                <img className="fondo-ser-socio" src={fondo} alt="Desarrollo" onLoad={hideLoader}/>
                <div className="data-encabezado-socio">
                    <div className="contenedor-socio-encabezado-boton-data">
                        <div className="titulo-texto-socio-encabezado">
                            <h1>Invertí en un desarrollo <br /><span className="naranja">urbanístico</span></h1>
                            <p>Acá podés participar como inversor en la creación de un nuevo barrio: ingresando con capital,
                                aportando obra o sumándote a una sociedad de desarrollo. Esta modalidad permite asegurar
                                mejores precios, controlar plazos, y obtener una rentabilidad mayor a la media del mercado.</p>
                            <Link to={"/contacto"} className="boton-contacto-enzacabezado-socio">Contactar</Link>
                        </div>
                        <div className="contenedor-flecha"    onClick={() => {
                            const section = document.querySelector("#que-es");
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
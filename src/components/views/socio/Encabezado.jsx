
import { useLoading } from "../../context/LoadingContext";
import fondo from "../../../assets/encabezados/ser-socio.jpg"
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";

const Encabezado = () => {


    const { hideLoader } = useLoading();
    hideLoader()


    return (
        <>
            <section className="contenedor-encabezado-ser-socio">
                <img className="fondo-ser-socio" src={fondo} alt="Desarrollo" />
                <div className="data-encabezado-socio">
                    <div className="contenedor-socio-encabezado-boton-data">
                        <div className="titulo-texto-socio-encabezado">
                            <h1>Invertí en un desarrollo <br />urbanístico</h1>
                            <p>Acá podés participar como inversor en la creación de un nuevo barrio: ingresando con capital,
                                aportando obra o sumándote a una sociedad de desarrollo. Esta modalidad permite asegurar
                                mejores precios, controlar plazos, y obtener una rentabilidad mayor a la media del mercado.</p>
                            <button className="boton-contacto-enzacabezado-socio">Contactar</button>
                        </div>
                        <div className="contenedor-flecha">
                            <img src={flecha} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Encabezado;
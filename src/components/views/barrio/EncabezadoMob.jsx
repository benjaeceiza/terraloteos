import luz from "../../../assets/iconos/luz.png";
import agua from "../../../assets/iconos/agua.png";
import seguridad from "../../../assets/iconos/seguridad.png";
import plataAgua from "../../../assets/iconos/planta-agua.png";
import alumbrado from "../../../assets/iconos/alumbrado.png";
import comercio from "../../../assets/iconos/comercial.png";
import calles from "../../../assets/iconos/ruta.png";
import ingreso from "../../../assets/iconos/portal.png";
import { useLoading } from "../../context/LoadingContext";
import { Link } from "react-router-dom";
import fleca from "../../../assets/iconos/flecha-hacia-abajo.png";



const EncabezadoMob = ({ barrio }) => {

    const { hideLoader } = useLoading();
    return (
        <>
            <>
                <section className="section-encabezado-barrio-mob">
                    <img id="fondo-encabezado-barrio" className="fondo-encabezado-barrio-mob" src={barrio.imgPrincipal}
                        alt="fondo" onLoad={hideLoader} />
                    <div className="contenedor-logo-barrio">
                        <img id="logo-encabezado-barrio" className="logo-encabezado-barrio-mob" src={barrio.logo}
                            alt="Logo barrio" />
                    <div className="contenedor-boton-flecha"
                        onClick={() => {
                            const section = document.querySelector("#descripcion");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}

                    >
                        <img className="flecha-encabezado-mobile" src={fleca} alt="flecha hacia abajo" />
                    </div>
                    </div>
                    <div id="descripcion" className="contenedor-data-barrio-mob">
                        <div className="contenedor-info-barrio-mob">
                            <h1 className="sub titulo-barrio">UN LUGAR DIFERENTE</h1>
                            <div className="contenedor-datos">
                                <div className="descripcion">
                                    <p>{barrio.descripcion}</p>
                                </div>
                                <div className="caracteristicas">
                                    <ul className="lista-caracteristicas">
                                        {barrio.servicios.luz ? <li className="item-caracteristicas">
                                            <img src={luz} alt="" />
                                            <p>Luz</p>
                                        </li> : ""}
                                        {barrio.servicios.agua ? <li className="item-caracteristicas">
                                            <img src={agua} alt="" />
                                            <p>Agua</p>
                                        </li> : ""}
                                        {barrio.servicios.alumbrado ? <li className="item-caracteristicas">
                                            <img src={alumbrado} alt="" />
                                            <p>Alumbrado</p>
                                        </li> : ""}
                                        {barrio.servicios.ingreso ? <li className="item-caracteristicas">
                                            <img src={ingreso} alt="" />
                                            <p>Portal de ingreso</p>
                                        </li> : ""}
                                        {barrio.servicios.calles ? <li className="item-caracteristicas">
                                            <img src={calles} alt="" />
                                            <p>Calles Consolidadas</p>
                                        </li> : ""}
                                        {barrio.servicios.seguridad ? <li className="item-caracteristicas">
                                            <img src={seguridad} alt="" />
                                            <p>Seguridad</p>
                                        </li> : ""}
                                        {barrio.servicios.comercial ? <li className="item-caracteristicas">
                                            <img src={comercio} alt="" />
                                            <p>Area Comercial</p>
                                        </li> : ""}
                                        {barrio.servicios.plantaAgua ? <li className="item-caracteristicas">
                                            <img src={plataAgua} alt="" />
                                            <p>Planta de Agua</p>
                                        </li> : ""}
                                    </ul>
                                </div>
                            </div>
                            <div className="contenedor-botones-barrio">
                                <Link to={barrio.mapa} target="_blank"><button className="boton-barrio">¿CÓMO LLEGAR?</button></Link>
                                <a href={barrio.broshure} download={""}><button className="boton-barrio">DESCARGAR BROCHURE</button></a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default EncabezadoMob;
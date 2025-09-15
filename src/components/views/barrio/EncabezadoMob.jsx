import luz from "../../../assets/iconos/luz.png";
import agua from "../../../assets/iconos/agua.png";
import gas from "../../../assets/iconos/gas.png";
import cloacas from "../../../assets/iconos/tuberia.png";


const EncabezadoMob = ({ barrio }) => {
    return (
        <>
            <>
                <section className="section-encabezado-barrio-mob">
                    <img id="fondo-encabezado-barrio" className="fondo-encabezado-barrio-mob" src={barrio.imgPrincipal}
                        alt="" />
                    <div className="contenedor-logo-barrio">
                        <img id="logo-encabezado-barrio" className="logo-encabezado-barrio-mob" src={barrio.logo}
                            alt="" />
                    </div>
                    <div className="contenedor-data-barrio-mob">
                        <div className="contenedor-info-barrio-mob">
                            <h1 className="sub titulo-barrio">UN LUGAR DIFERENTE</h1>
                            <div className="contenedor-datos">
                                <div className="descripcion">
                                    <p>{barrio.descripcion}</p>
                                </div>
                                <div className="caracteristicas">
                                    <ul className="lista-caracteristicas">
                                        <li className="item-caracteristicas">
                                            <img src={luz} alt="" />
                                            <p>Luz</p>
                                        </li>
                                        <li className="item-caracteristicas">
                                            <img src={agua} alt="" />
                                            <p>Agua</p>
                                        </li>
                                        <li className="item-caracteristicas">
                                            <img src={gas} alt="" />
                                            <p>Gas</p>
                                        </li>
                                        <li className="item-caracteristicas">
                                            <img src={cloacas} alt="" />
                                            <p>Cloacas</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contenedor-botones-barrio">
                                <button className="boton-barrio">¿CÓMO LLEGAR?</button>
                                <button className="boton-barrio">DESCARGAR BROCHURE</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default EncabezadoMob;
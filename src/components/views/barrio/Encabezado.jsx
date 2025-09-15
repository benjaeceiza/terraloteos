import luz from "../../../assets/iconos/luz.png";
import agua from "../../../assets/iconos/agua.png";
import seguridad from "../../../assets/iconos/seguridad.png";
import plataAgua from "../../../assets/iconos/planta-agua.png";
import alumbrado from "../../../assets/iconos/alumbrado.png";
import comercio from "../../../assets/iconos/comercial.png";
import calles from "../../../assets/iconos/ruta.png";
import ingreso from "../../../assets/iconos/portal.png";



const Encabezado = ({barrio}) => {

    return(
        <>
           <section className="section-encabezado-barrio">
            <img id="fondo-encabezado-barrio" className="fondo-encabezado-barrio" src={barrio.imgPrincipal}
                alt=""/>
            <div className="contenedor-data-barrio">
                <img id="logo-encabezado-barrio" className="logo-encabezado-barrio" src={barrio.logo}
                    alt=""/>
                <div className="contenedor-info-barrio">
                    <h1 className="sub titulo-barrio">UN LUGAR DIFERENTE</h1>
                    <div className="contenedor-datos">
                        <div className="descripcion">
                            <p>{barrio.descripcion}</p>
                        </div>
                        <div className="caracteristicas">
                            <ul className="lista-caracteristicas">
                                {barrio.servicios.luz? <li  className="item-caracteristicas">
                                    <img src={luz} alt=""/>
                                    <p>Luz</p>
                                </li>:""}
                                {barrio.servicios.agua? <li  className="item-caracteristicas">
                                    <img src={agua} alt=""/>
                                    <p>Agua</p>
                                </li>:""}
                                {barrio.servicios.alumbrado? <li  className="item-caracteristicas">
                                    <img src={alumbrado} alt=""/>
                                    <p>Alumbrado</p>
                                </li>:""}
                                {barrio.servicios.ingreso? <li  className="item-caracteristicas">
                                    <img src={ingreso} alt=""/>
                                    <p>Portal de ingreso</p>
                                </li>:""}
                                {barrio.servicios.calles? <li  className="item-caracteristicas">
                                    <img src={calles} alt=""/>
                                    <p>Calles Consolidadas</p>
                                </li>:""}
                                {barrio.servicios.seguridad? <li  className="item-caracteristicas">
                                    <img src={seguridad} alt=""/>
                                    <p>Seguridad</p>
                                </li>:""}
                                {barrio.servicios.comercial? <li  className="item-caracteristicas">
                                    <img src={comercio} alt=""/>
                                    <p>Area Comercial</p>
                                </li>:""}
                                {barrio.servicios.plantaAgua? <li  className="item-caracteristicas">
                                    <img src={plataAgua} alt=""/>
                                    <p>Planta de Agua</p>
                                </li>:""}
                          
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
    )
}

export default Encabezado;
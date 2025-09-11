import flecha from "../../../assets/iconos/mas-grande-que.png"

const Encabezado = ({ casa }) => {

    return (
        <>
            <section className="sectionm-encabezado-casa">
                <img className="img-encabezado-casa" src={casa.imgPrincipal} alt={casa.tipo} />
                <div className="contenedor-data-casa">
                    <h1 className="title-casa-encabezado" >{casa.tipo}</h1>
                    <div className="contenedor-textos-casa">
                        <h2 className="titulo-encabezado-casa">TU CASA IDEAL</h2>
                        <div className="contenedor-caracteristicas-data">
                            <div className="contenedor-descripcion-casa">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio debitis ex maiores eligendi fuga aliquid ad commodi odit illum itaque placeat temporibus repudiandae neque, id eveniet ullam expedita similique!</p>
                            </div>
                            <div className="contenedor-caracteristicas-casa">
                                <p className="titulo-lista">CARACTERISTICAS</p>
                                <ul className="lista-caracteristicas-modelo">
                                    <li className="item-caracteristicas-modelo">
                                        <img src={flecha} alt="" />
                                        <p>Comedor</p>
                                    </li>
                                    <li className="item-caracteristicas-modelo">
                                        <img src={flecha} alt="" />
                                        <p>Cochera</p>
                                    </li>
                                    <li className="item-caracteristicas-modelo">
                                        <img src={flecha} alt="" />
                                        <p>2 Habitaciones</p>
                                    </li>
                                    <li className="item-caracteristicas-modelo">
                                        <img src={flecha} alt="" />
                                        <p>Galeria</p>
                                    </li>
                                    <li className="item-caracteristicas-modelo">
                                        <img src={flecha} alt="" />
                                        <p>Terraza</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="contenedor-detalles">
                    <ul className="lista-detalles">
                        <li className="item-detalles">
                            <img className="icono-detalles" src="" alt="" />
                            <p className="parrafo-detalle">180dias</p>
                        </li>
                    </ul>
                </div> */}
            </section>
        </>
    )
}

export default Encabezado;
import lote from "../../../assets/iconos/lote.png";
import diferenciales from "../../../assets/iconos/diferenciales.png";
import distancia from "../../../assets/iconos/distancia.png";

const Detalles = ({ barrio }) => {
    return (
        <>
            <section className="section-detalles-casa">
                <div className="contenedor-detalles-casa">
                    <ul className="lista-detalles-casa">
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={lote} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">Lotes</p>
                            {isNaN(barrio.lotes)
                                ?
                                < p className="sub-texto-detalle">{barrio.lotes}</p>
                                :
                                <p className="sub-texto-detalle">Desde {barrio.lotes}m2</p>

                            }
                        </li>
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={diferenciales} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">Diferenciales</p>
                            <p className="sub-texto-detalle">{barrio.diferenciales}</p>
                        </li>
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={distancia} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">Distancias</p>
                            <p className="sub-texto-detalle">{barrio.distancias}</p>
                        </li>

                    </ul>
                </div>
            </section >
        </>
    )
}

export default Detalles;
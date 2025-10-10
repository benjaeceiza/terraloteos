import tiempo from "../../../assets/iconos/reloj-negro.png";
import metros from "../../../assets/iconos/metros.png";
import casco from "../../../assets/iconos/casco-blanco.png";

const Detalles = ({ casa }) => {
    return (
        <>
            <section className="section-detalles-casa">
                <div className="contenedor-detalles-casa">
                    <ul className="lista-detalles-casa">
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={tiempo} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">180 Dias</p>
                            <p className="sub-texto-detalle">No esperes más y tené tu casa ya!</p>
                        </li>
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={metros} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">{casa.terreno}m2</p>
                            <p className="sub-texto-detalle">Amplio terreno</p>
                        </li>
                        <li className="item-detalle-casa">
                            <div className="contenedor-icono-detalle">
                                <img src={casco} alt="" className="icono-detalle" />
                            </div>
                            <p className="texto-detalle">Calidad</p>
                            <p className="sub-texto-detalle">Calidad de construcción asegurada</p>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Detalles;
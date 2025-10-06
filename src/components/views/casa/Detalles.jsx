import tiempo from "../../../assets/iconos/reloj-negro.png"
import metros from "../../../assets/iconos/metros.png"

const Detalles = () => {
    return (
        <>
            <section className="section-detalles-casa">
                <div className="contenedor-detalles-casa">
                    <ul className="lista-detalles-casa">
                        <li className="item-detalle-casa">
                            <img src={tiempo} alt="" className="icono-detalle" />
                            <p className="texto-detalle">180 Dias</p>
                        </li>
                        <li className="item-detalle-casa">
                            <img src={metros} alt="" className="icono-detalle" />
                            <p className="texto-detalle">180 Dias</p>
                        </li>
                        <li className="item-detalle-casa">
                            <img src={tiempo} alt="" className="icono-detalle" />
                            <p className="texto-detalle">180 Dias</p>
                        </li>
                        <li className="item-detalle-casa">
                            <img src={tiempo} alt="" className="icono-detalle" />
                            <p className="texto-detalle">180 Dias</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Detalles;
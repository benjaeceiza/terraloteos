
import productos from "../../../data/productos.json";
import expandir from "../../../assets/iconos/expandir.png";
import expandirBlanco from "../../../assets/iconos/expandir-blanco.png";
import ubi from "../../../assets/iconos/marcador-de-posicion.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const RenderListados = () => {

    const [isVisible, setIsVisible] = useState("");
    const [buttonExpand, setButtonExpand] = useState("")
    return (
        <>
            <section className="section-productos">
                <h2><span className="fondo-naranja">Nuestros</span> <span className="naranja">Productos</span>.</h2>
                <div className="contenedor-productos">
                    {
                        productos.map(producto => (
                            <Link to={producto.link} key={producto.nombre} >
                                <div className="card-producto" onMouseEnter={() => setIsVisible(producto.nombre)} onMouseLeave={() => setIsVisible("")}>
                                    <img className={isVisible == producto.nombre ? "fondo-card-producto-activo" : "fondo-card-producto"} src={producto.miniatura} alt="desarrollo" />
                                    <div className="info-card-producto">
                                        <div className={buttonExpand == producto.nombre ? "contenedor-expandir-icono-active":"contenedor-expandir-icono"} onMouseEnter={() => setButtonExpand(producto.nombre)} onMouseLeave={() => setButtonExpand("")}>
                                            {buttonExpand == producto.nombre
                                                ?
                                                <img src={expandirBlanco} alt="expandir" />
                                                :
                                                <img src={expandir} alt="expandir" />
                                            }
                                        </div>
                                        <div>
                                            <div>
                                                <p className="nombre-card-producto" >{producto.nombre}</p>
                                                <p className={isVisible == producto.nombre ? "descripcion-card-producto" : "none"}>{producto.descripcion}</p>
                                            </div>
                                            <div className="contenedor-ubicacion-card-producto">
                                                <img src={ubi} alt="Ubicacion" />
                                                <p>{producto.ubicacion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>))
                    }


                </div>
            </section>
        </>
    )
}

export default RenderListados;
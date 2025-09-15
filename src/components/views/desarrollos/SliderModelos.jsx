import fondo from "../../../assets/casas/loft.png";
import reloj from "../../../assets/iconos/reloj-negro.png";
import metros from "../../../assets/iconos/metros.png";
import cama from "../../../assets/iconos/cama.png";
import modelos from "../../../data/casas.json";
import { Link } from "react-router-dom";

const Slidermodelos = () => {

    return (
        <>
            <section className="section-modelos">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        {
                            modelos.map(e => (
                                <div className={e.tipo == "Loft"? "carousel-item active slider-item" : "carousel-item slider-item"} key={Math.random()}>
                                    <img className="fondo-modelo" src={e.imgPrincipal} alt="" />
                                    <Link to={"/casa/"+ e.tipo}className="link-modelo">
                                        <div className="contenedor-data-modelo">
                                            <p className="title-modelo">{e.tipo}</p>
                                            <ul className="lista-modelo">
                                                <li className="item-modelo">
                                                    <img className="icono-modelo" src={reloj} alt="" />
                                                    <p className="texto-icono">{e.entrega} dias</p>
                                                </li>
                                                <li className="item-modelo">
                                                    <img className="icono-modelo" src={metros} alt="" />
                                                    <p className="texto-icono">{e.terreno} m2</p>
                                                </li>
                                                <li className="item-modelo">
                                                    <img className="icono-modelo" src={cama} alt="" />
                                                    <p className="texto-icono">{e.habitaciones} Habitaciones</p>
                                                </li>
                                            </ul>
                                            <button className="button-slider animacion">Más información</button>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                    <button id="boton-slider-1-modelos" className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <p className="boton-slider-modelo girar-modelo">ANTERIOR</p>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button id="boton-slider-2-modelos" className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <p className="boton-slider-modelo girar-modelo">SIGUENTE</p>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Slidermodelos;
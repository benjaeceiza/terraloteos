import { Link } from "react-router-dom"
import sliderImg1 from "../../../assets/slider-index/1.jpg"
import sliderImg2 from "../../../assets/slider-index/2.jpeg"
import sliderImg3 from "../../../assets/slider-index/3.jpg"
import iconoFacebook from "../../../assets/iconos/facebook.png"
import iconoWts from "../../../assets/iconos/whatsapp.png"
import iconoIg from "../../../assets/iconos/instagram.png"
import iconoX from "../../../assets/iconos/x.png"
const SliderProyectos = () => {
  
    return(
        <>
           <div id="carouselExampleAutoplaying" className="carousel slide aditional" data-bs-ride="carousel"
                data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="contenedor-item-carrucel">
                            <img src={sliderImg1} className="img-caroucel d-block w-100" alt="..."/>
                            <Link to={""} className="contenedor-data-carrucel">
                                <div className="textos">
                                    <p className="titulo-slider">Garden<br/>Village</p>
                                    <div className="detalles-texto">
                                         <div className="texto-contenedor">
                                            <p className="titulo-texto">TIPO DE PROYECTO /</p>
                                            <p className="texto-decorado">COMERCIAL</p>
                                        </div>
                                        <div className="texto-contenedor">
                                            <p className="titulo-texto">UBICACION /</p>
                                            <p className="texto-decorado">MERLO, SAN LUIS</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="contenedor-item-carrucel">
                            <img src={sliderImg2} className="img-caroucel d-block w-100" alt="..."/>
                            <Link href="" className="contenedor-data-carrucel">
                                <div className="textos">
                                    <p className="titulo-slider">Atilier<br/>Estudiantil</p>
                                    <div className="detalles-texto">
                                         <div className="texto-contenedor">
                                            <p className="titulo-texto">TIPO DE PROYECTO /</p>
                                            <p className="texto-decorado">COMERCIAL</p>
                                        </div>
                                        <div className="texto-contenedor">
                                            <p className="titulo-texto">UBICACION /</p>
                                            <p className="texto-decorado">MERLO, SAN LUIS</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="contenedor-item-carrucel">
                            <img src={sliderImg3} className="img-caroucel d-block w-100" alt="..."/>
                            <Link to={""} className="contenedor-data-carrucel">
                                <div className="textos">
                                    <p className="titulo-slider">Torres<br/>Comunity</p>
                                    <div className="detalles-texto">
                                        <div className="texto-contenedor">
                                            <p className="titulo-texto">TIPO DE PROYECTO /</p>
                                            <p className="texto-decorado">COMERCIAL</p>
                                        </div>
                                        <div className="texto-contenedor">
                                            <p className="titulo-texto">UBICACION /</p>
                                            <p className="texto-decorado">MERLO, SAN LUIS</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="contacto-slider">
                    <div className="contenedor-botones-slider">
                        <Link className="button-slider" to={""}> Ver más proyectos</Link>
                        <Link className="button-slider" to={""}>Contactar</Link>
                    </div>

                    <ul className="redes-slider">
                        <li><Link to={""}><img id="fc" src={iconoFacebook} alt=""/></Link></li>
                        <li><Link to={""}><img id="ig" src={iconoIg} alt=""/></Link></li>
                        <li><Link to={""}><img id="x" src={iconoX} alt=""/></Link></li>
                        <li><Link to={""}><img id="wts" src={iconoWts} alt=""/></Link></li>
                    </ul>

                </div>
                <button id="boton-slider-2" className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <p className="boton-slider girar">ANTERIOR</p>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id="boton-slider-1" className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <p className="boton-slider girar">SIGUIENTE</p>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
 }

 export default SliderProyectos

import tipologiaA from "../../../assets/productos-terraloteos/tipologia-a.png";
import a from "../../../assets/productos-terraloteos/a.png";
import b from "../../../assets/productos-terraloteos/b.png";
import c from "../../../assets/productos-terraloteos/c.png";
import aD from "../../../assets/productos-terraloteos/a-d.png";
import Bc from "../../../assets/productos-terraloteos/b-c.png";
import tA from "../../../assets/productos-terraloteos/t-a.png";
import tB from "../../../assets/productos-terraloteos/t-b.png";
import tC from "../../../assets/productos-terraloteos/t-c.png";
import tD from "../../../assets/productos-terraloteos/t-d.png";
import tipologiaB from "../../../assets/productos-terraloteos/tipologia-b.png";
import tipologiaC from "../../../assets/productos-terraloteos/tipologia-c.png";
import tipologiaAd from "../../../assets/productos-terraloteos/tipologia-a-d.png";
import tipologiaBc from "../../../assets/productos-terraloteos/tipologia-b-c.png";
import terrazaA from "../../../assets/productos-terraloteos/terraza-a.png";
import terrazaB from "../../../assets/productos-terraloteos/terraza-b.png";
import terrazaC from "../../../assets/productos-terraloteos/terraza-c.png";
import terrazaD from "../../../assets/productos-terraloteos/terraza-d.png";
import habitaciones from "../../../assets/iconos/habitaciones.png";
import baño from "../../../assets/iconos/banera.png";
import terraza from "../../../assets/iconos/balcon.png";
import solarium from "../../../assets/iconos/solarium.png";
import comedor from "../../../assets/iconos/mesa-de-comedor.png";
import horno from "../../../assets/iconos/estufa-de-cocina.png";
import jacuzzi from "../../../assets/iconos/jacuzzi.png";
import parrilla from "../../../assets/iconos/parrilla-de-barbacoa.png";

import { useEffect } from "react";
import { Link } from "react-router-dom";



const Departamentos = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animacion-fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px 100px 0px", // dispara 150px antes de que el elemento entre
            }
        );

        const elements = document.querySelectorAll(
            ".contenedor-card-departamento"
        );
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="section-departamentos">
                <h2 className="categoria-titulo-departamentos">PLANTA BAJA CON PATIO</h2>
                <div className="contenedor-cards-departamentos">
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA A</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                               <Link to={a} target="_blank"><img className="foto-departamento" src={tipologiaA} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>1 Habitacion</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={b} target="_blank"><img className="foto-departamento" src={tipologiaB} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>2 Habitaciones</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                               <Link to={c} target="_blank"><img className="foto-departamento" src={tipologiaC} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>3 Habitaciones</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="categoria-titulo-departamentos">1° y 2° PISO CON BALCON</h2>

                <div className="contenedor-cards-departamentos">
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA A - D</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={aD} target="_blank"><img className="foto-departamento" src={tipologiaAd} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                     <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>1 Habitacion</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={terraza} alt="" />
                                                    <p>Terraza</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B - C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={Bc} target="_blank"><img className="foto-departamento" src={tipologiaBc} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCinco" aria-expanded="false" aria-controls="flush-collapseCinco">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseCinco" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                      <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>2 Habitaciones</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={terraza} alt="" />
                                                    <p>Terraza</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="categoria-titulo-departamentos">3° PISO CON TERRAZA</h2>
                <div className="contenedor-cards-departamentos">
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA A</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={tA} target="_blank"><img className="foto-departamento" src={terrazaA} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseUno" aria-expanded="false" aria-controls="flush-collapseUno">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseUno" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                       <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>1 Habitacion</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={jacuzzi} alt="" />
                                                    <p>Jacuzzi</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={solarium} alt="" />
                                                    <p>Solarium</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={tB} target="_blank"><img className="foto-departamento" src={terrazaB} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDos" aria-expanded="false" aria-controls="flush-collapseDos">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseDos" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                      <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>2 Habitaciones</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={jacuzzi} alt="" />
                                                    <p>Jacuzzi</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={solarium} alt="" />
                                                    <p>Solarium</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={tC} target="_blank"><img className="foto-departamento" src={terrazaC} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTres" aria-expanded="false" aria-controls="flush-collapseTres">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTres" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                       <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>2 Habitaciones</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={jacuzzi} alt="" />
                                                    <p>Jacuzzi</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={solarium} alt="" />
                                                    <p>Solarium</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA D</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <Link to={tD} target="_blank"><img className="foto-departamento" src={terrazaD} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCuatro" aria-expanded="false" aria-controls="flush-collapseCuatro">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseCuatro" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                     <div className="accordion-body comodidades-departamento">
                                            <ul className="comodidades-lista-departamento">
                                                <li className="item-comodidades-departamento">
                                                    <img src={habitaciones} alt="" />
                                                    <p>1 Habitacion</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={comedor} alt="" />
                                                    <p>Living - Comedor</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={baño} alt="" />
                                                    <p>1 Baño</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={horno} alt="" />
                                                    <p>Cocina</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={parrilla} alt="" />
                                                    <p>Asador</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={jacuzzi} alt="" />
                                                    <p>Jacuzzi</p>
                                                </li>
                                                <li className="item-comodidades-departamento">
                                                    <img src={solarium} alt="" />
                                                    <p>Solarium</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Departamentos;
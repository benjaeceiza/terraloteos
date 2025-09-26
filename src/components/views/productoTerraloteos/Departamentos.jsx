
import tipologiaA from "../../../assets/productos-terraloteos/tipologia-a.png";
import tipologiaB from "../../../assets/productos-terraloteos/tipologia-b.png";
import tipologiaC from "../../../assets/productos-terraloteos/tipologia-c.png";
import tipologiaAd from "../../../assets/productos-terraloteos/tipologia-a-d.png";
import tipologiaBc from "../../../assets/productos-terraloteos/tipologia-b-c.png";
import terrazaA from "../../../assets/productos-terraloteos/terraza-a.png";
import terrazaB from "../../../assets/productos-terraloteos/terraza-b.png";
import terrazaC from "../../../assets/productos-terraloteos/terraza-c.png";
import terrazaD from "../../../assets/productos-terraloteos/terraza-d.png";
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
                               <Link to={tipologiaA} target="_blank"><img className="foto-departamento" src={tipologiaA} alt="" /></Link>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={tipologiaB} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={tipologiaC} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
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
                                <img className="foto-departamento" src={tipologiaAd} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B - C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={tipologiaBc} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCinco" aria-expanded="false" aria-controls="flush-collapseCinco">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseCinco" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
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
                                <img className="foto-departamento" src={terrazaA} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseUno" aria-expanded="false" aria-controls="flush-collapseUno">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseUno" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA B</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={terrazaB} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDos" aria-expanded="false" aria-controls="flush-collapseDos">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseDos" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA C</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={terrazaC} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTres" aria-expanded="false" aria-controls="flush-collapseTres">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTres" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-card-departamento">
                        <p>TIPOLOGIA D</p>
                        <div className="contenedor-img-acordeon">
                            <div className="contenedor-imagen-card-departamento">
                                <img className="foto-departamento" src={terrazaD} alt="" />
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed botom-producto" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCuatro" aria-expanded="false" aria-controls="flush-collapseCuatro">
                                            Comodidades
                                        </button>
                                    </h2>
                                    <div id="flush-collapseCuatro" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
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
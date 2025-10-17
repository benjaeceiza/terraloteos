import Categorias from "./Categorias";
import Mapas from "../../Mapas";
import Numeros from "./Numeros";
import SliderProyectos from "./SliderProyectos";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import { useEffect } from "react";
import CategoriasMob from "./CategoriasMob";
import check from "../../../assets/iconos/check.png"


const Home = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".frase");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animacion-fade");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);




    return (
        <>

            <main className="main-index">
                <div className="fondo-negro-main">
                    <SliderProyectos/>
                    <section className="section-frase">
                        <div className="contenedor-frase">
                            <p className="frase">CONSTRUIMOS</p>
                            <p className="frase">|</p>
                            <p className="frase">DESARROLLAMOS</p>
                            <p className="frase">|</p>
                            <p className="frase">INVERTIMOS</p>

                        </div>
                    </section>
                    <section className="section-frase-mob pantalla">
                        <div className="contenedor-frase-mob">
                            <ul className="lista-frase">
                                <li className="item-frase">
                                    <img src={check} alt="" />
                                    <p className="frase-mob">CONSTRUIMOS</p>
                                </li>
                                <li className="item-frase">
                                    <img src={check} alt="" />
                                    <p className="frase-mob">DESARROLLAMOS</p>
                                </li>
                                <li className="item-frase">
                                    <img src={check} alt="" />
                                    <p className="frase-mob">INVERTIMOS</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <div className="contenedor-title">
                        <h2 className="sub">ELEGÍ TU LUGAR EN TERRALOTEOS</h2>
                    </div>
                    <Categorias />
                    <CategoriasMob />
                    <div className="contenedor-title">
                        <h2 className="sub">NOSOTROS</h2>
                    </div>
                    <Numeros />
                    <div className="contenedor-title">
                        <h2 className="sub">DONDE NOS ENCONTRAMOS</h2>
                    </div>
                    <Mapas />
                    <SectionContacto />
                    <SectionContactoMob />
                </div>
            </main>
        </>
    )
}

export default Home;
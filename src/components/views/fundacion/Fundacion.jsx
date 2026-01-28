
import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado";
import logoIg from "../../../assets/iconos/instagram.png"
import { Link } from "react-router-dom";
import Preguntas from "./Preguntas";


const Fundacion = () => {

    return (
        <>
            <main className="main">
                <Encabezado />
                <div id="info-data" className="contenedor-title">
                    <div className="completed-header">
                        <span className="completed-subtitle">FUNDACIÓN TERRA</span>
                        <h2 className="completed-title">¿QUIÉNES SOMOS?</h2>
                        <div className="completed-line"></div>
                    </div>
                </div>
                <section className="section-nosotros-fundacion">
                    <div className="contenedor-textos-fundacion">
                        <div className="contenedor-textos-secu">
                            <p className="title-texto-fundacion">Fundación Grupo Terra</p>
                            <p className="parrafo-fundacion">Fundación Grupo Terra es una organización sin fines de lucro impulsada por Terraloteos, con
                                base en la provincia de San Luis. Su propósito es desarrollar acciones sostenibles en torno al
                                medioambiente y la niñez, como ejes centrales de impacto.</p>
                            <p className="parrafo-fundacion">La Fundación se financia de forma independiente y actualmente trabaja en la puesta en marcha
                                de un vivero propio en Villa de Merlo. Desde allí se producen especies arbóreas, plantas
                                aromáticas y frutales, que servirán tanto para tareas de reforestación como para el desarrollo
                                de productos regionales.</p>
                            <p className="parrafo-fundacion">Esta iniciativa busca, además, abrir espacios de participación ciudadana mediante talleres,
                                actividades educativas, proyectos escolares y articulación con otros actores locales.</p>
                            <p className="parrafo-fundacion">A largo plazo, la Fundación tiene como objetivo ser un actor activo en la mejora del entorno
                                natural, la creación de conciencia ecológica y el fortalecimiento del tejido social en las
                                comunidades donde Terraloteos está presente.</p>
                        </div>
                        <div className="contenedor-textos-secu" >
                            <p className="title-texto-fundacion">Nuestra Misión:</p>
                            <p className="parrafo-fundacion">   Ser guardianes de nuestro planeta, realizando acciones para concientizar y generar un mundo verde con proyectos diversificados de manera innovadora responsable y sostenible</p>
                        </div>
                        <div className="contenedor-textos-secu" >
                            <p className="title-texto-fundacion">Nuestra Visión:</p>
                            <p className="parrafo-fundacion">Enfocados en contribuir al mejoramiento de la calidad de vida de las comunidades y el ecosistema para una calidad de vida en equilibrio con la naturaleza.</p>
                        </div>
                        <div className="contenedor-textos-secu" >
                            <p className="title-texto-fundacion">Nuestros Valores:</p>
                            <p className="parrafo-fundacion">Respeto, Pasión, Compromiso y Responsabilidad Social Empresarial.</p>
                        </div>
                        <div className="contenedor-boton">
                            <Link to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="_blank" className="boton-ig-fundacion" ><img className="icono-boton-ig" src={logoIg} alt="" /> Seguinos</Link>
                        </div>
                    </div>
                </section>
                <div className="contenedor-title">
                    <div className="completed-header">
                        <span className="completed-subtitle">INFORMACIÓN</span>
                        <h2 className="completed-title">PREGUNTAS FRECUENTES</h2>
                        <div className="completed-line"></div>
                    </div>
                </div>
                <Preguntas />
                <SectionContacto />
            </main>
        </>
    )
}

export default Fundacion;
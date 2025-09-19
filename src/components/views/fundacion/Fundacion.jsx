
import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado";
import logoIg from "../../../assets/iconos/instagram.png"
import { Link } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import { useEffect, useState } from "react";
import SectionContactoMob from "../../SectionContactoMob";


const Fundacion = () => {

    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
           setIsLoading(false)
        },1000)
    },[])
    return (
        <>
            {
                
                isLoading
                ?
                <LoadingScreen/>
                :
                <main className="main">
                <Encabezado />
                <div className="contenedor-title">
                    <h2 className="sub">¿QUIENES SOMOS?</h2>
                </div>
                <section className="section-nosotros-fundacion">
                    <div className="contenedor-textos-fundacion">
                        <div className="contenedor-textos-secu">
                            <p className="title-texto-fundacion">Fundación Grupo Terra</p>
                            <p className="parrafo-fundacion">Nace como parte de nuestro compromiso con el cuidado y concientización del medio ambiente, la flora y la fauna autóctona de la Región , y ante la necesidad de poner en acción la ayuda concreta para educar y hacer.
                                Desde la semilla que da vida y hace un llamado ante las actuales circunstancias del planeta y de la humanidad, la producción de árboles, la reforestación y la necesidad de fortalecer los recursos ecológicos nos unimos para generar un equilibrio social para mejorar la calidad de vida de nuestras comunidades logrando implementar estrategias de sostenibilidad</p>
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
                    </div>
                    <div className="contenedor-boton">
                        <Link to={"https://www.instagram.com/terraloteos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="_blank" className="boton-ig-fundacion" ><img className="icono-boton-ig" src={logoIg} alt="" /> Seguinos</Link>
                    </div>
                </section>
                <SectionContacto />
                <SectionContactoMob/>
            </main>}
        </>
    )
}

export default Fundacion;
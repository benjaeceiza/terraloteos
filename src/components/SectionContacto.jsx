import logo from "../assets/logos/logo-corto.png";
import Mailer from "./mailer/Mailer"; 

const SectionContacto = () => {
    return (
        <>
            <div className="contenedor-title">
                <h2 className="sub">COMUNICATE CON NOSOTROS</h2>
            </div>
            
            <section className="section-contacto">
                <div className="contenedor-contacto">
                    
                    {/* 1. HORARIOS */}
                    <div className="contenedor-horarios">
                        <p className="title-horario">Contacto</p>
                        <p className="texto-horario">+54 9 2657 60-4317</p>
                        <p className="texto-horario"> info@terraloteos.com</p>
                    </div>

                    {/* 2. LOGO Y NOMBRE */}
                    <div className="contenedor-logo-nombre">
                        <img src={logo} alt="Logo Terraloteos" />
                        <p>TERRALOTEOS</p>
                    </div>

                    {/* 3. FORMULARIO (MAILER) */}
                    <div className="formulario-wrapper">
                         {/* Asegúrate que Mailer use las clases genéricas 'input' y 'mensaje' */}
                        <Mailer />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default SectionContacto;
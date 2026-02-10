import logo from "../assets/logos/logo-corto.png";
import Mailer from "./mailer/Mailer";
import iconWsp from "../assets/iconos/wts-white.png"; 
import iconMail from "../assets/iconos/arroba-white.png";


const SectionContacto = () => {
    return (
        <>
            <div className="contenedor-title">
                <div className="completed-header">
                    <span className="completed-subtitle">CONTACTO</span>
                    <h2 className="completed-title">COMUNÍCATE CON NOSOTROS</h2>
                    <div className="completed-line"></div>
                </div>
            </div>

            <section className="section-contacto">
                <div className="contenedor-contacto">

                    {/* 1. HORARIOS */}

                    <div className="contact-card-modern-horario">
                        <h3 className="contact-card-title-horario">Hablemos</h3>
                        <div className="contact-card-divider-horario"></div>

                        <div className="contact-card-items-horario">
                            {/* Item Teléfono */}
                            <a href="https://wa.me/5492657604317" target="_blank" className="contact-item-row-horario">
                                <div className="contact-icon-box-horario">
                                    <img src={iconWsp} alt="WhatsApp" />
                                </div>
                                <div className="contact-info-text-horario">
                                    <span className="contact-label-horario">WhatsApp</span>
                                    <span className="contact-value-horario">+54 9 2657 60-4317</span>
                                </div>
                            </a>

                            {/* Item Email */}
                            <a href="mailto:info@terraloteos.com" className="contact-item-row-horario">
                                <div className="contact-icon-box-horario">
                                    <img src={iconMail} alt="Email" />
                                </div>
                                <div className="contact-info-text-horario">
                                    <span className="contact-label-horario">Email</span>
                                    <span className="contact-value-horario">info@terraloteos.com</span>
                                </div>
                            </a>
                        </div>
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
import logo from "../assets/logos/logo-corto.png"
import MailerMob from "./mailer/MailerMob";

const SectionContactoMob = () => {

    return(
        <>
                     <section className="section-contacto-mob">
                         <div className="contenedor-contacto-mob">
                             <div className="contenedor-logo-nombre-mob">
                                 <img src={logo} className="logo-footer-contacto-mob" alt="Logo Terraloteos" />
                                 <p className="title-logo-contacto-mob">TERRALOTEOS</p>
                             </div>
                     
                             <div className="contenedor-horarios-mob">
                                 <p className="title-horario-mob">Horario de atención:</p>
                                 <p className="texto-horario-mob">Lunes – Viernes: 9hs – 18hs</p>
                                 <p className="texto-horario-mob">Atención por WhatsApp: 24/7</p>
         
                             </div>
         
                             <MailerMob/>
                         </div>
                     </section>
        </>
    )
}

export default SectionContactoMob;
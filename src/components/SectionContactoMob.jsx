import logo from "../assets/logos/logo-corto.png"

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
         
                             <div className="contenedor-formulario-mob">
                                 <input className="input-mob" type="text" placeholder="Nombre" />
                                 <input className="input-mob" type="text" placeholder="Apellido" />
                                 <input className="input-mob" type="text" placeholder="Correo Electronico" />
                                 <input className="input-mob" type="text" placeholder="Numero" />
                                 <textarea className="mensaje-mob" placeholder="Mensaje" name="" ></textarea>
                                 <button className="button-formulario-mob">Enviar</button>
                             </div>
                         </div>
                     </section>
        </>
    )
}

export default SectionContactoMob;
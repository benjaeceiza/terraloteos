
import logo from "../assets/logos/logo-corto.png"


const SectionContacto = () => {

    return (
        <>
            <div className="contenedor-title">
                <h2 className="sub">PONETE EN CONTACTO CON NOSOTROS</h2>
            </div>
            <section className="section-contacto">
                <div className="contenedor-contacto">
            
                    <div className="contenedor-horarios">
                        <p className="title-horario">Horario de atención:</p>
                        <p className="texto-horario">Lunes – Viernes: 9hs – 18hs</p>
                        <p className="texto-horario">Atención por WhatsApp: 24/7</p>

                    </div>
                    <div className="contenedor-logo-nombre desk">
                        <img src={logo} alt="Logo Terraloteos" />
                        <p>TERRALOTEOS</p>
                    </div>

                    <div className="contenedor-formulario">
                        <input className="input" type="text" placeholder="Nombre" />
                        <input className="input" type="text" placeholder="Apellido" />
                        <input className="input" type="text" placeholder="Correo Electronico" />
                        <input className="input" type="text" placeholder="Numero" />
                        <textarea className="mensaje" placeholder="Mensaje" name="" ></textarea>
                        <button className="button-formulario">Enviar</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionContacto;
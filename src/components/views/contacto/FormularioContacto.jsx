


const FormularioContacto = () => {

    return (
        <>
            <section className="section-formulario-contacto">
                <form className="formulario-contacto">
                        <input className="input-contacto" type="text" placeholder="Nombre" />
                        <input className="input-contacto" type="text" placeholder="Apellido" />
                        <input className="input-contacto" type="email" placeholder="Correo Electrónico" />
                        <input className="input-contacto" type="number" placeholder="Teléfono" />
                        <textarea className="mensaje-formulario-contacto" placeholder="Mensaje" name="" id=""></textarea>
                </form>
            </section>
        </>
    )
}

export default FormularioContacto;
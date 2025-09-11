
import reloj from "../../../assets/iconos/reloj.png"
import tel from "../../../assets/iconos/llamar.png"
import mail from "../../../assets/iconos/arroba.png"


const CardContact = () => {

    return (
        <>
            <section className="section-cards-contact">
                <div className="card-contact-container">
                    <img className="icono-card-contact" src={mail} alt="Email" />
                    <div className="texto-card-contact">
                        <p className="title-card-contact">Correo Electronico</p>
                        <p className="subtitle-card-contact">terraloteos@gmail.com</p>
                    </div>
                    <button className="button-card-contact">Contactar</button>
                </div>
                <div className="card-contact-container">
                    <img className="icono-card-contact" src={reloj} alt="Horarios" />
                    <div className="texto-card-contact">
                        <p className="title-card-contact">Horarios de Atención</p>
                        <p className="subtitle-card-contact">Lunes a Viernes: 9hs a 20hs.</p>
                    </div>
                    <button className="button-card-contact">¿Cómo Llegar?</button>
                </div>
                <div className="card-contact-container config">
                    <img className="icono-card-contact " src={tel} alt="Telefono" />
                    <div className="texto-card-contact">
                        <p className="title-card-contact">Teléfonos</p>
                        <p className="subtitle-card-contact">2657-123123</p>
                    </div>
                    <button className="button-card-contact">Llamar</button>
                </div>
            </section>
        </>
    )
}

export default CardContact;
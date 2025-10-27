

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const FormularioContacto = () => {

    const form = useRef();

    const [isSending, setIsSending] = useState(false)

    const notifySucces = () => toast.success('Formulario enviado con éxito!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });;

    const notifyError = () => toast.error('Error al enviar el formulario', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })


    const sendEmail = (e) => {

        e.preventDefault();
        setIsSending(true)
        emailjs
            .sendForm('service_9bojsir', 'template_n3yh8h7', form.current, {
                publicKey: 'ozycZTfYueG9-OUJR',
            })
            .then(
                () => {
                    notifySucces();
                    setIsSending(false)
                },
                (error) => {
                    notifyError();
                    setIsSending(false)
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset()
    };

    return (
        <>


            <section className="section-formulario-contacto">
                {
                    isSending
                        ?
                        <div className='contenedor-spinner-formulario'>
                            <div className="spinner-border text-success " role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        ""
                }
                <form className="formulario-contacto" ref={form} onSubmit={sendEmail}>
                    <input className="input-contacto" name='user_name' type="text" placeholder="Nombre" required={true} />
                    <input className="input-contacto" name='last_name' type="text" placeholder="Apellido" required={true} />
                    <input className="input-contacto" name='user_email' type="email" placeholder="Correo Electrónico" required={true} />
                    <input className="input-contacto" name='user_phone' type="number" placeholder="Teléfono" required={true} />
                    <textarea className="mensaje-formulario-contacto" placeholder="Mensaje" name="message" id=""></textarea>
                    <input className='button-formulario' type="submit" value={"Enviar"} />
                </form>
            </section>
        </>
    )
}

export default FormularioContacto;
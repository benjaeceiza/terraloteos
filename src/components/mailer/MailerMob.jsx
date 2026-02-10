
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const MailerMob = () => {
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
        autoClose: 2000,
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
            .sendForm('service_saiuowe', 'template_qftn1lx', form.current, {
                publicKey: "wQKiSjnmmbuHFTPUf",
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
            <div className='formulario-spinner-mob'>

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
                <form className="contenedor-formulario-mob" ref={form} onSubmit={sendEmail}>
                    <input className="input-mob" name='user_name' type="text" placeholder="Nombre" required={true} />
                    <input className="input-mob" name='last_name' type="text" placeholder="Apellido" required={true} />
                    <input className="input-mob" name='user_email' type="email" placeholder="Correo Electronico" required={true} />
                    <input className="input-mob" name='user_phone' type="text" placeholder="Numero" required={true} />
                    <textarea className="mensaje-mob" placeholder="Mensaje" name="message"></textarea>
                    <input type='submit' value={"Enviar"} className="button-formulario-mob" />
                </form>

            </div>
        </>
    )
}

export default MailerMob;
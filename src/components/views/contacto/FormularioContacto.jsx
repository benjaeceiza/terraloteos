import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const FormularioContacto = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    // Toasts configurados
    const notifySuccess = () => toast.success('¡Mensaje enviado con éxito!', { theme: "light" });
    const notifyError = () => toast.error('Error al enviar. Intenta nuevamente.', { theme: "light" });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_saiuowe', 'template_ix7ocqh', form.current, {
                publicKey: "wQKiSjnmmbuHFTPUf",
            })
            .then(() => {
                notifySuccess();
                setIsSending(false);
                e.target.reset();
            }, (error) => {
                console.error('FAILED...', error.text);
                notifyError();
                setIsSending(false);
            });
    };

    return (
        <form className="formulario-moderno-contacto" ref={form} onSubmit={sendEmail}>
            <div className="input-group-row-contacto">
                <input className="input-moderno-contacto" name='user_name' type="text" placeholder="Nombre" required />
                <input className="input-moderno-contacto" name='last_name' type="text" placeholder="Apellido" required />
            </div>

            <input className="input-moderno-contacto" name='user_email' type="email" placeholder="Correo Electrónico" required />
            <input className="input-moderno-contacto" name='user_phone' type="number" placeholder="Teléfono" required />

            <textarea className="textarea-moderno-contacto" name="message" placeholder="¿En qué podemos ayudarte?" required></textarea>

            <button className="btn-enviar-contacto" type="submit" disabled={isSending}>
                {isSending ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                    "ENVIAR MENSAJE"
                )}
            </button>
        </form>
    )
}

export default FormularioContacto;
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";
import Mapas from "../../Mapas";
import CardContact from "./CardContacto";
import FormularioContacto from "./FormularioContacto";

const Contacto = () => {
    const { hideLoader } = useLoading();

    useEffect(() => {
        // Simulamos carga o esperamos que cargue el mapa
        const timer = setTimeout(() => {
            hideLoader();
        }, 500);
        return () => clearTimeout(timer);
    }, [hideLoader]);

    return (
        <main className="main-contact-contacto">
            
            <div className="encabezado-contacto-contacto">
                <span className="subtitulo-encabezado-contacto">ESTAMOS PARA ASESORARTE</span>
                <h1 className="titulo-contacto-contacto">CONTACTO</h1>
                <div className="linea-naranja-contacto"></div>
            </div>

            <div className="contact-wrapper-contacto">
          
                <div className="contact-info-col-contacto">
                    <h3 className="contact-col-title-contacto">Información</h3>
                    <p className="contact-text-contacto">
                        Ponte en contacto con nuestro equipo comercial para recibir asesoramiento personalizado sobre tu próximo terreno o vivienda.
                    </p>
                    <CardContact />
                </div>

                {/* Columna Derecha: Formulario */}
                <div className="contact-form-col-contacto">
                    <h3 className="contact-col-title-contacto">Envíanos un mensaje</h3>
                    <FormularioContacto />
                </div>
            </div>

            <div className="mapa-section-contacto">
                <Mapas />
            </div>

        </main>
    )
}

export default Contacto;
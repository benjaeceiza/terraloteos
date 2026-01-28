import { useState } from "react";
import reloj from "../../../assets/iconos/reloj.png";
import tel from "../../../assets/iconos/llamar.png";
import mail from "../../../assets/iconos/arroba.png";
import ubi from "../../../assets/iconos/marcador-de-posicion.png"; // Agregué este icono para que se vea más completo

// Base de datos de tus oficinas
const OFFICES = [
    {
        id: "vm",
        nombre: "Villa Mercedes",
        email: " info@terraloteos.com",
        telefono: "+54 9 2657 60-4317",
        linkTel: "5492657604317",
        horario: "Lunes a Jueves: 08:00hs a 12:30hs - 16:00hs a 20:30hs Viernes: 08:00hs a 16:00hs",
        direccion: "Av. Bartolomé Mitre 1260"
    },
    {
        id: "merlo",
        nombre: "Merlo",
        email: " info@terraloteos.com",
        linkTel: "5492657604317",
        telefono: "+54 9 2657 60-4317", // Puse uno de ejemplo
        horario: "Lunes a Lunes: 09:00hs a 21:00hs", // Horario diferente para que se note el cambio
        direccion: "Av. del Sol 821"
    },
    {
        id: "sl",
        nombre: "San Luis",
        email: " info@terraloteos.com",
        telefono: "+54 9 2657 60-4317", 
        linkTel: "5492657604317",
        horario: " Lunes a Viernes: 09:00hs a 18:00hs.",
        direccion: "Av. Boulevard Las Cañadas"
    }
];

const CardContact = () => {
    // Estado para saber cuál oficina está seleccionada (por defecto la primera: VM)
    const [activeOffice, setActiveOffice] = useState(OFFICES[0]);

    return (
        <div className="card-contact-wrapper">
            
            {/* 1. Pestañas de Selección */}
            <div className="contact-tabs">
                {OFFICES.map((office) => (
                    <button 
                        key={office.id}
                        className={`tab-btn ${activeOffice.id === office.id ? 'active' : ''}`}
                        onClick={() => setActiveOffice(office)}
                    >
                        {office.nombre}
                    </button>
                ))}
            </div>

            {/* 2. Lista de Información Dinámica */}
            <div className="info-list-contacto animate-fade-in">
                
                {/* Email */}
                <div className="info-item-contacto">
                    <div className="icon-circle-contacto">
                        <img src={mail} alt="Email" />
                    </div>
                    <div className="info-data-contacto">
                        <span className="info-label-contacto">Correo Electrónico</span>
                        <a href={`mailto:${activeOffice.email}`} className="info-value-contacto">
                            {activeOffice.email}
                        </a>
                    </div>
                </div>

                {/* Teléfono (Cambia según selección) */}
                <div className="info-item-contacto">
                    <div className="icon-circle-contacto">
                        <img src={tel} alt="Teléfono" />
                    </div>
                    <div className="info-data-contacto">
                        <span className="info-label-contacto">Teléfono / WhatsApp</span>
                        <a href={`https://wa.me/${activeOffice.linkTel}`} target="_blank" className="info-value-contacto">
                            {activeOffice.telefono}
                        </a>
                    </div>
                </div>

                {/* Dirección (Extra útil) */}
                <div className="info-item-contacto">
                    <div className="icon-circle-contacto">
                        <img src={ubi} alt="Dirección" />
                    </div>
                    <div className="info-data-contacto">
                        <span className="info-label-contacto">Dirección</span>
                        <span className="info-value-contacto">{activeOffice.direccion}</span>
                    </div>
                </div>

                {/* Horario (Cambia según selección) */}
                <div className="info-item-contacto">
                    <div className="icon-circle-contacto">
                        <img src={reloj} alt="Horarios" />
                    </div>
                    <div className="info-data-contacto">
                        <span className="info-label-contacto">Horarios de Atención</span>
                        <span className="info-value-contacto highlight-text">
                            {activeOffice.horario}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardContact;
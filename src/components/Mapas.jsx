import { useState } from "react";
import icono from "../assets/iconos/marcador-de-posicion.png";


const Mapas = () => {
    // Array de oficinas para manejo limpio de datos
    const oficinas = [
        {
            id: 1,
            ciudad: "Villa Mercedes",
            direccion: "Av. Bartolomé Mitre 1260",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.494102030164!2d-65.4608835!3d-33.670268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a63a6ac37f9%3A0x1d81cd2d27c11a7b!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756247020567!5m2!1ses-419!2sar" // Tu mapaVm2
        },
        {
            id: 2,
            ciudad: "Villa Mercedes",
            direccion: "Av. Bartolomé Mitre 734",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.12755068707!2d-65.4636013!3d-33.67976129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a88ab099ea7%3A0xbaa9df1d0c1964bc!2sAv.%20Bartolom%C3%A9%20Mitre%20734%2C%20D5730%20Villa%20Mercedes%2C%20San%20Luis!5e0!3m2!1ses-419!2sar!4v1756246973648!5m2!1ses-419!2sar" // Tu mapaVm
        },
        {
            id: 3,
            ciudad: "San Luis",
            direccion: "Av. Boulevard Las Cañadas",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1667.3741132792925!2d-66.3342908!3d-33.2992492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d4397f54e40159%3A0xbf2440be27387425!2sEdificio%20Torre%20Boussy!5e0!3m2!1ses-419!2sar!4v1756247039128!5m2!1ses-419!2sar"
        },
        {
            id: 4,
            ciudad: "Merlo",
            direccion: "Av. del Sol 821",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d421.3359288401751!2d-65.0008852!3d-32.3470998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e18341e31dc7%3A0x9dfe6b8a77070027!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756246868149!5m2!1ses-419!2sar"
        },
        {
            id: 5,
            ciudad: "Merlo",
            direccion: "Av. del Sol 351",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3370.7203069999096!2d-65.0062055!3d-32.3462174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e19789848b4d%3A0xde0d5da6f0b0f560!2sTerra%20Loteos%20-%20Av.%20del%20Sol%20351!5e0!3m2!1ses-419!2sar!4v1756247099046!5m2!1ses-419!2sar"
        }
    ];

    // Estado para saber cuál está activa (por defecto la primera)
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-mapas">
            <div className="container-mapas">
                
                {/* 1. Panel Lateral de Oficinas */}
                <div className="panel-oficinas">
                    <h2 className="titulo-oficinas">
                        Nuestras <span className="text-orange">Oficinas</span>
                    </h2>
                    <div className="lista-oficinas">
                        {oficinas.map((oficina, index) => (
                            <div 
                                key={oficina.id}
                                className={`card-oficina ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="icon-box">
                                    <img src={icono} alt="Ubicación" />
                                </div>
                                <div className="info-oficina">
                                    <h3 className="ciudad">{oficina.ciudad}</h3>
                                    <p className="direccion">{oficina.direccion}</p>
                                </div>
                                {/* Indicador visual de selección */}
                                {index === activeIndex && <div className="indicator-dot"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Visualizador del Mapa */}
                <div className="visor-mapa">
                    <iframe 
                        title="Mapa Sucursal"
                        className="iframe-mapa"
                        src={oficinas[activeIndex].mapaUrl}
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}

export default Mapas;
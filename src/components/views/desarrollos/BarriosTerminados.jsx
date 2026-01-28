import { Link } from "react-router-dom";
import { optimizarImagen } from "../../../utils/cloudinary";


// Puedes importar esto de un JSON si prefieres
const barriosTerminados = [
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580395/logo_blanco_valle_de_los_comechingones-Photoroom_ubc3em.png", },
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580514/logo_blanco_la_vertiente-Photoroom_unlfmu.png" },
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580514/logo_blanco_dique-Photoroom_mkwcnx.png" },
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580515/logo_blanco_BSM_I-Photoroom_nvbo89.png" },
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580515/logo_blanco_BSM_2-Photoroom_hhfyhs.png" },
    { logo: "https://res.cloudinary.com/dmnksm3th/image/upload/v1769580513/logo_blanco_arroyo_benitez-Photoroom_tv9fzs.png" }
];

const BarriosTerminados = () => {
    return (
        <section className="completed-projects-section">

            <div className="logos-track-container">
                {barriosTerminados.map((barrio, index) => (
                    <div key={index} className="logo-item-link">
                        <img
                            // Optimizamos logos pequeños (300px sobra)
                            src={optimizarImagen(barrio.logo, 300)}
                            alt={`Logo ${barrio.nombre}`}
                            className="project-logo"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BarriosTerminados;
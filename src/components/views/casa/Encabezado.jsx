import { useLoading } from "../../context/LoadingContext";

// --- IMPORTACIÓN DE TODOS LOS ICONOS NECESARIOS ---
import habitacion from "../../../assets/iconos/habitacion.png";
import salaEstar from "../../../assets/iconos/sala-de-estar.png";
import comedor from "../../../assets/iconos/comedor.png";
import cocina from "../../../assets/iconos/cocina.png";
import cochera from "../../../assets/iconos/cochera.png";
import galeriaIcon from "../../../assets/iconos/hall.png"; // Usando hall para galería
import entrepiso from "../../../assets/iconos/entrepiso.png";
import desayunador from "../../../assets/iconos/desayunador.png";
import terraza from "../../../assets/iconos/terraza.png";
import lavadero from "../../../assets/iconos/lavadero.png";
import deposito from "../../../assets/iconos/deposito.png";
import hallIngreso from "../../../assets/iconos/hall.png";
import despensa from "../../../assets/iconos/despensa.png";
import banosIcon from "../../../assets/iconos/bano.png";
import expansion from "../../../assets/iconos/metros.png";
// Iconos genéricos para los que faltaban en tu lista anterior
import vestidorIcon from "../../../assets/iconos/vestidor.png";
import banoSuiteIcon from "../../../assets/iconos/bano.png";
import tiempoIcon from "../../../assets/iconos/reloj-negro.png"; // Para días de obra

// --- MAPEO: Conecta las claves de tu JSON con el icono y el nombre a mostrar ---
const iconMap = {
    salaEstar: { icon: salaEstar, label: "Sala de Estar" },
    comedor: { icon: comedor, label: "Comedor" },
    cocina: { icon: cocina, label: "Cocina" },
    cochera: { icon: cochera, label: "Cochera" },
    galeria: { icon: galeriaIcon, label: "Galería" },
    expansion: { icon: expansion, label: "Posible Expansión" },
    entrepiso: { icon: entrepiso, label: "Entrepiso" },
    desayunador: { icon: desayunador, label: "Desayunador" },
    terraza: { icon: terraza, label: "Terraza" },
    lavadero: { icon: lavadero, label: "Lavadero" },
    deposito: { icon: deposito, label: "Depósito" },
    hallIngreso: { icon: hallIngreso, label: "Hall de Ingreso" },
    despensa: { icon: despensa, label: "Despensa" },
    vestidor: { icon: vestidorIcon, label: "Vestidor" },
    banoSuite: { icon: banoSuiteIcon, label: "Baño en Suite" }
    // Nota: Habitaciones y Baños los trato aparte en la barra de datos clave
};

const Encabezado = ({ casa }) => {
    const { hideLoader } = useLoading();

    // Filtramos las características booleanas (true/false) del JSON
    const activeFeatures = Object.keys(casa).filter(key =>
        iconMap[key] && casa[key] === true
    );

    return (
        <section className="hero-split-layout">

            {/* --- COLUMNA IZQUIERDA: VISUAL --- */}
            <div className="hero-visual-side">
                <div className="image-container-sticky">
                    <img
                        src={casa.imgPrincipal}
                        alt={`Modelo ${casa.tipo}`}
                        className="hero-image-main"
                        onLoad={hideLoader}
                    />
                    <div className="hero-overlay-gradient"></div>
                </div>
            </div>

            {/* --- COLUMNA DERECHA: INFORMACIÓN --- */}
            <div className="hero-info-side">
                <div className="info-content-wrapper">

                    {/* 1. Título */}
                    <div className="header-block">
                        <span className="accent-label">MODELO DE VIVIENDA</span>
                        <h1 className="model-title">{casa.tipo}</h1>
                        <div className="separator-line"></div>
                    </div>

                    {/* 2. Barra de Datos Clave (Resumen rápido) */}
                    <div className="key-specs-bar">
                         {/* Usamos el icono de reloj que tenías */}
                         <div className="spec-item highlight">
                            <img src={tiempoIcon} alt="Tiempo" className="spec-icon-small"/>
                             <div>
                                <span className="spec-value">{casa.entrega || 180} Días</span>
                                <span className="spec-label">Plazo de Obra</span>
                             </div>
                        </div>
                        <div className="spec-item">
                            <span className="spec-value">{casa.terreno} m²</span>
                            <span className="spec-label">Terreno</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-value">{casa.habitaciones}</span>
                            <span className="spec-label">Dormitorios</span>
                        </div>
                        <div className="spec-item">
                            {/* Usamos la clave exacta de tu JSON: "baños" */}
                            <span className="spec-value">{casa.baños}</span>
                            <span className="spec-label">Baños</span>
                        </div>
                    </div>

                    {/* 3. Descripción */}
                    <div className="description-block">
                        <h3 className="section-subtitle">Descripción</h3>
                        <p>{casa.descripcion}</p>
                    </div>

                    {/* 4. Grilla de Comodidades (Iconos) */}
                    {activeFeatures.length > 0 && (
                        <div className="features-block">
                            <h3 className="section-subtitle">Comodidades y Servicios</h3>
                            <div className="features-grid">
                                {activeFeatures.map((key) => (
                                    <div key={key} className="feature-card">
                                        <div className="feature-icon-box">
                                            <img src={iconMap[key].icon} alt={iconMap[key].label} />
                                        </div>
                                        <span className="feature-name">{iconMap[key].label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 5. Botón de Acción (CTA) */}
                    <div className="cta-block">
                        {casa.planos ? (
                            <a href={casa.planos} download className="btn-download-plans">
                                DESCARGAR PLANOS PDF
                            </a>
                        ) : (
                            <button className="btn-download-plans disabled">Planos no disponibles</button>
                        )}
                         <p className="cta-disclaimer">Consultá por financiación y detalles técnicos específicos.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Encabezado;
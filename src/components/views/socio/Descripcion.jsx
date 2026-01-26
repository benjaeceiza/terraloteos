import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import iconOrigen from "../../../assets/iconos/lupa.png"; // Usa iconos que tengas, o repetí uno por ahora
import iconInversion from "../../../assets/iconos/dolar.png"; // Ejemplo
import iconComunidad from "../../../assets/iconos/apretar-manos.png"; // Ejemplo

const Descripcion = () => {
    const { showLoader } = useLoading();

    const pilares = [
        {
            titulo: "Desde el Origen",
            texto: "Esta sección está pensada para quienes quieren ser parte del desarrollo desde el momento cero, capturando el mayor valor.",
            icono: iconOrigen 
        },
        {
            titulo: "Inversión Abierta",
            texto: "Una nueva forma de inversión, abierta tanto a grandes capitales como a quienes dan sus primeros pasos, con visión a largo plazo.",
            icono: iconInversion
        },
        {
            titulo: "Impacto Real",
            texto: "Sumate a un modelo colaborativo. No solo comprás tierra: ayudás a crear un nuevo lugar en el mapa con identidad propia.",
            icono: iconComunidad
        }
    ];

    return (
        <section id="que-es" className="section-descripcion-socio">
            <div className="container-main">
                
                {/* Título Principal */}
                <div className="header-descripcion">
                    <h2>
                        <span className="texto-blanco">¿Qué significa</span>{" "}
                        <span className="texto-naranja">Ser Socio?</span>
                    </h2>
                    <div className="separador-naranja"></div>
                </div>

                {/* Grilla de Tarjetas */}
                <div className="grid-pilares">
                    {pilares.map((item, index) => (
                        <article key={index} className="card-pilar">
                            <div className="card-header">
                                <h3 className="titulo-pilar">{item.titulo}</h3>
                            </div>
                            <p className="texto-pilar">{item.texto}</p>
                            <div className="borde-animado"></div>
                        </article>
                    ))}
                </div>

                {/* Botón de Acción */}
                <div className="contenedor-btn-socio">
                    <Link 
                        to={"/listado-productos"} 
                        className="boton-cta-socio" 
                        onClick={() => showLoader()}
                    >
                        Ver Oportunidades
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Descripcion;
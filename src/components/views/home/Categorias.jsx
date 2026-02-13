import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import logo from "../../../assets/logos/logo-corto.png";

const Categorias = () => {
    const { showLoader } = useLoading();

    // Array de configuración para no repetir código
    const categorias = [
        {
            id: 1,
            titulo: "VIVIR",
            texto: "Encontrá tu lugar ideal. Descubrí nuestros barrios y modelos de vivienda.",
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1770992070/Vivir_a4y5lj.png",
            link: "/desarrollos"
        },
        {
            id: 2,
            titulo: "INVERTIR",
            texto: "Hacé crecer tu capital con propiedades que generan valor real en el tiempo.",
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1770992071/Invertir_k4fj9c.png",
            link: "/listado-productos"
        },
        {
            id: 3,
            titulo: "SER PARTE",
            texto: "Convertite en socio del desarrollo desde cero y obtené beneficios únicos.",
            img: "https://res.cloudinary.com/dmnksm3th/image/upload/v1770992070/Ser_Parte_nqygcv.jpg",
            link: "/ser-parte-desarrollo"
        }
    ];

    return (
        <section className="section-categorias-premium">
            <div className="accordion-container-categorias">
                {categorias.map((cat) => (
                    <Link
                        to={cat.link}
                        key={cat.id}
                        className="accordion-item-categorias"
                        onClick={showLoader}
                    >
                        {/* Imagen de fondo con efecto Parallax sutil */}
                        <div className="accordion-bg" style={{ backgroundImage: `url(${cat.img})` }}></div>

                        {/* Overlay oscuro para legibilidad */}
                        <div className="accordion-overlay"></div>

                        {/* Contenido: Título Vertical (estado normal) */}
                        <div className="accordion-title-vertical">
                            <h3>{cat.titulo}</h3>
                        </div>

                        {/* Contenido: Info Expandida (estado hover) */}
                        <div className="accordion-content">
                            <img src={logo} alt="Logo" className="accordion-logo" />
                            <h2 className="accordion-title-expanded">{cat.titulo}</h2>
                            <p className="accordion-text">{cat.texto}</p>
                            <span className="accordion-btn">Explorar</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Categorias;
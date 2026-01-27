import fondo from "../../../assets/encabezados/fondo-nosotros.jpeg";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";
import { useLoading } from "../../context/LoadingContext";

const Encabezado = () => {
  const { hideLoader } = useLoading();

  const handleScroll = () => {
    const section = document.querySelector("#historia");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-nosotros">
      <div className="hero-bg-wrapper-nosotros">
        <img 
            className="hero-bg-img-nosotros" 
            src={fondo} 
            alt="Fondo Nosotros" 
            onLoad={hideLoader} 
        />
        <div className="hero-overlay-nosotros"></div>
      </div>

      <div className="hero-content-nosotros">
        <h1 className="titulo-hero-nosotros animate-up">TERRALOTEOS</h1>
        <div className="linea-decorativa"></div>
        <h2 className="subtitulo-hero-nosotros animate-up delay-1">DESARROLLOS URBANÍSTICOS</h2>
        
      </div>
        <div className="scroll-btn-nosotros animate-up delay-2 " onClick={handleScroll}>
            <span>Conocé nuestra historia</span>
            <img src={flecha} alt="Bajar" />
        </div>
    </section>
  )
}

export default Encabezado;
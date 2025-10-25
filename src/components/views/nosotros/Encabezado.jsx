import fondo from "../../../assets/encabezados/fondo-nosotros.jpeg";
import fleca from "../../../assets/iconos/flecha-hacia-abajo.png";
import { useLoading } from "../../context/LoadingContext";

const Encabezado = () => {

  const { hideLoader } = useLoading();
  return (
    <>
      <section className="section-encabezado-nosotros">
        <img className="fondo-encabezado-nosotros" src={fondo} alt="" onLoad={hideLoader} />
        <div className="fondo-negro">
          <div className="contenedor-titulos">
            <h1 className="titulo-encabezado-nosotros">TERRALOTEOS</h1>
            <h2 className="subtitulo-encabezado-nosotros">DESARROLLOS URBANISTICOS</h2>
          </div>
            <div className="contenedor-boton-flecha"
            onClick={() => {
              const section = document.querySelector("#nosotros");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}

          >
            <img className="flecha-encabezado-mobile" src={fleca} alt="flecha hacia abajo" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Encabezado;
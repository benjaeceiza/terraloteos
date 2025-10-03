import fondo from "../../../assets/encabezados/fondo-nosotros.jpeg"
import { useLoading } from "../../context/LoadingContext";

const Encabezado = () => {

    const { hideLoader } = useLoading();
    return(
        <>
          <section className="section-encabezado-nosotros">
              <img className="fondo-encabezado-nosotros" src={fondo} alt="" onLoad={hideLoader} />
              <div className="fondo-negro"> 
                  <div className="contenedor-titulos">
                    <h1 className="titulo-encabezado-nosotros">TERRALOTEOS</h1>
                    <h2 className="subtitulo-encabezado-nosotros">DESARROLLOS URBANISTICOS</h2>
                  </div>
              </div>
            </section>
        </>
    )
}

export default Encabezado;
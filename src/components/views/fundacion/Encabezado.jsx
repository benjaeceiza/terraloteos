
import fondo from "../../../assets/encabezados/vivir.jpeg";
import logo from "../../../assets/logos/fundacion.webp";


const Encabezado = () => {

    return(
        <>
          <section className="encabezado-fundacion">
               <img className="fondo-encabezado-fundacion" src={fondo} alt="" />
               <div className="contenedor-logo-fundacion">
                     <img className="logo-fundacion" src={logo} alt="" />
               </div>
            </section>
        </>
    )
}

export default Encabezado;

import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado";
import RenderBarrios from "./RenderBarrios";
import Slidermodelos from "./SliderModelos";
import EncabezadoMob from "./EncabezadoMob";
import Preguntas from "../casa/Preguntas";
const Desarrollos = () => {


  return (
    <>

      <main className="main-index">
        <div className="fondo-negro-main">
          <Encabezado />
          <EncabezadoMob />
          <div className="contenedor-title">
            <h2 className="sub">DONDE COMENZAR TU HOGAR</h2>
          </div>
          <RenderBarrios />
          <div className="contenedor-title">
            <h2 className="sub">NUESTROS MODELOS</h2>
          </div>
          <Slidermodelos />
                 <div className="contenedor-title">
                    <h2 className="sub">PREGUNTAS FRECUENTES</h2>
                </div>
                <Preguntas/>
          <SectionContacto />
        </div>
      </main>
    </>
  )
}

export default Desarrollos;
import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado"; // Este será el nuevo responsive
import RenderBarrios from "./RenderBarrios";
import Slidermodelos from "./SliderModelos";
import Preguntas from "../casa/Preguntas";
import BarriosTerminados from "./BarriosTerminados";


const Desarrollos = () => {
  return (
    <main className="main-index" style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      {/* El Encabezado nuevo y profesional */}
      <Encabezado />

      <div id="listado" className="contenedor-title" style={{ marginTop: "60px" }}>
        <div className="completed-header">
          <span className="completed-subtitle">BARRIOS</span>
          <h2 className="completed-title">DÓNDE COMENZAR TU HOGAR</h2>
          <div className="completed-line"></div>
        </div>
      </div>
      <RenderBarrios />
      <div className="contenedor-title">
        <div className="completed-header">
          <span className="completed-subtitle">TRAYECTORIA</span>
          <h2 className="completed-title">BARRIOS TERMINADOS</h2>
          <div className="completed-line"></div>
        </div>
      </div>
      <BarriosTerminados />

      <div className="contenedor-title">
        <div className="completed-header">
          <span className="completed-subtitle">VIVIENDAS</span>
          <h2 className="completed-title">NUESTROS MODELOS</h2>
          <div className="completed-line"></div>
        </div>
      </div>
      <Slidermodelos />
      <div className="contenedor-title">
        <div className="completed-header">
          <span className="completed-subtitle">INFORMACIÓN</span>
          <h2 className="completed-title">PREGUNTAS FRECUENTES</h2>
          <div className="completed-line"></div>
        </div>
      </div>
      <Preguntas />

      <SectionContacto />
    </main>
  );
};

export default Desarrollos;
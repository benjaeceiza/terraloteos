import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado"; // Este será el nuevo responsive
import RenderBarrios from "./RenderBarrios";
import Slidermodelos from "./SliderModelos";
import Preguntas from "../casa/Preguntas";


const Desarrollos = () => {
  return (
    <main className="main-index" style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      {/* El Encabezado nuevo y profesional */}
      <Encabezado />

      <div className="contenedor-title" style={{ marginTop: "60px" }}>
        <h2 id="listado" className="sub" style={{ color: "white" }}>DONDE COMENZAR TU HOGAR</h2>
      </div>
      <RenderBarrios />

      <div className="contenedor-title">
        <h2 className="sub" style={{ color: "white" }}>NUESTROS MODELOS</h2>
      </div>
      <Slidermodelos />

      <div className="contenedor-title">
        <h2 className="sub" style={{ color: "white" }}>PREGUNTAS FRECUENTES</h2>
      </div>
      <Preguntas />

      <SectionContacto />
    </main>
  );
};

export default Desarrollos;
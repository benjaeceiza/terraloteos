import Encabezado from "./Encabezado";
import RenderListados from "./RenderListados";
import SectionContacto from "../../SectionContacto"; // Asumiendo que ya unificamos este
import Preguntas from "./Preguntas";

const Listado = () => {
    return (
        <main>
            <Encabezado />
            
            {/* Agregamos el ID aquí para que el botón "Bajar" funcione */}
            <div id="listado">
                <RenderListados />
            </div>

            <div className="contenedor-title">
                <h2 className="sub">PREGUNTAS FRECUENTES</h2>
            </div>
            
            <Preguntas />
            <SectionContacto />
        </main>
    )
}

export default Listado;
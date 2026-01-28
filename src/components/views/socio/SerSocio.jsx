import SectionContacto from "../../SectionContacto";
import Descripcion from "./Descripcion";
import Encabezado from "./Encabezado";
import Preguntas from "./Preguntas";


const SerSocio = () => {
    return (
        <>
            <main className="main">
                <Encabezado />
                <Descripcion />
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
        </>
    )
}

export default SerSocio;
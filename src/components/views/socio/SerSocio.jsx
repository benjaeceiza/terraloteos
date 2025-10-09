import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
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
                    <h2 className="sub">PREGUNTAS FRECUENTES</h2>
                </div>
                <Preguntas />
                <SectionContacto />
                <SectionContactoMob />
            </main>
        </>
    )
}

export default SerSocio;
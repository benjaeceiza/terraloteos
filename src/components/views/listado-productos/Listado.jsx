
import Encabezado from "./Encabezado";
import RenderListados from "./RenderListados";
import SectionContacto from "../../SectionContacto"
import SectionContactoMob from "../../SectionContactoMob"
import Preguntas from "./Preguntas";


const Listado = () => {

   
  

    return (
        <>
            <main className="">
                <Encabezado />
                <RenderListados/>
                <div className="contenedor-title">
                    <h2 className="sub">PREGUNTAS FRECUENTES</h2>
                </div>
                <Preguntas/>
                <SectionContacto/>
                <SectionContactoMob/>
            </main>
        </>
    )
}

export default Listado;
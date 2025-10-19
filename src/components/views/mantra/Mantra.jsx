
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import Contenido from "./Contenido";
import Encabezado from "./Encabezado";


const Mantra = () => {

   

    return (
        <>
            <main className="main-mantra">
                <Encabezado />
                <Contenido />
                <SectionContacto/>
                <SectionContactoMob/>
            </main>
        </>
    )
}

export default Mantra;
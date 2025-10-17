import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import DescripcionNosotros from "./DescripcionNosotros";
import Encabezado from "./Encabezado";



const Nosotros = () => {

    return (
        <>
            <main className="main">
                <Encabezado />
                <DescripcionNosotros />
                <SectionContacto />
                <SectionContactoMob />
            </main>
        </>
    )
}

export default Nosotros;
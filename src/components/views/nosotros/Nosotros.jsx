import SectionContacto from "../../SectionContacto";
import DescripcionNosotros from "./DescripcionNosotros";
import Encabezado from "./Encabezado";



const Nosotros = () => {

    return (
        <>
            <main className="main">
                <Encabezado />
                <DescripcionNosotros />
                <SectionContacto />
            </main>
        </>
    )
}

export default Nosotros;
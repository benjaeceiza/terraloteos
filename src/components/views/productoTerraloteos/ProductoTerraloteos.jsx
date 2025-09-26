import Departamentos from "./Departamentos";
import Descripcion from "./Descripcion";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";



const ProductoTerraloteos = () => {
     return(
        <>
         <main>
            <Encabezado/>
            <Descripcion/>
            <Departamentos/>
            <SectionContacto/>
            <SectionContactoMob/>
         </main>
        </>
     )
}
export default ProductoTerraloteos;
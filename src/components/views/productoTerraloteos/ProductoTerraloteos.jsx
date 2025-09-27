import Departamentos from "./Departamentos";
import Descripcion from "./Descripcion";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import SliderTorres from "./SliderTorres";
import { useState } from "react";



const ProductoTerraloteos = () => {

       const [isTrue, setIsTrue] = useState(false)
     return(
        <>
         <main>
            <Encabezado/>
            <Descripcion setIsTrue={setIsTrue}/>
            <Departamentos/>
            <SliderTorres isTrue={isTrue} setIsTrue={setIsTrue}/>
            <SectionContacto/>
            <SectionContactoMob/>
         </main>
        </>
     )
}
export default ProductoTerraloteos;
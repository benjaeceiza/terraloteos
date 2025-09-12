import { useParams } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import GaleriaImagenes from "./GaleriaImagenes";

const Barrio = () => {
    const {nombre} =  useParams();
    const barrio = barrios.find(e => e.nombre == nombre);
 



    return(
        <>
         <main>
            <Encabezado barrio={barrio}/>
            <GaleriaImagenes barrio={barrio}/>
            <SectionContacto/>
         </main>
        </>
    )

}

export default Barrio;
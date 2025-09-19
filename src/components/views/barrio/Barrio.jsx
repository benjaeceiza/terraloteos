import { useParams } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import GaleriaImagenes from "./GaleriaImagenes";
import SliderModelos from "../desarrollos/SliderModelos"
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";

const Barrio = () => {
    const {nombre} =  useParams();
    const barrio = barrios.find(e => e.nombre == nombre);
 



    return(
        <>
         <main className="main">
            <Encabezado barrio={barrio}/>
            <EncabezadoMob barrio={barrio}/>
            <GaleriaImagenes barrio={barrio}/>
             <div className="contenedor-title">
                <h2 className="sub">NUESTROS MODELOS</h2>
              </div>
            <SliderModelos/>
            <SectionContacto/>
            <SectionContactoMob/>
         </main>
        </>
    )

}

export default Barrio;
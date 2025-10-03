import Departamentos from "./Departamentos";
import Descripcion from "./Descripcion";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import SliderTorres from "./SliderTorres";
import { useState } from "react";
import cerrar from "../../../assets/iconos/cerrar.png";



const ProductoTerraloteos = () => {

   const [sliderVisible, setSliderVisible] = useState(false)
   return (
      <>
         <main>
            <Encabezado />
            <Descripcion setSliderVisible={setSliderVisible}/>
            <Departamentos />
            {sliderVisible ?
               <div className="contenedor-slider-galeria">
                  <div className="contenedor-boton-cerrar-galeria">
                     <img onClick={() => setSliderVisible(false)} src={cerrar} alt="" />
                  </div>
                  <SliderTorres />
               </div> : ""}
            <SectionContacto />
            <SectionContactoMob />
         </main>
      </>
   )
}
export default ProductoTerraloteos;
import { useParams } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import GaleriaImagenes from "./GaleriaImagenes";
import SliderModelos from "../desarrollos/SliderModelos"
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";
import SliderGaleria from "./SliderGaleria";
import cerrar from "../../../assets/iconos/cerrar.png";
import { useState } from "react";
import Detalles from "./Detalles";

const Barrio = () => {
  const { nombre } = useParams();
  const barrio = barrios.find(e => e.nombre == nombre);
  const [sliderVisible, setSliderVisible] = useState(false)




  return (
    <>
      <main className="main">
        <Encabezado barrio={barrio} />
        <EncabezadoMob barrio={barrio} />
        <Detalles barrio={barrio}/>
        <GaleriaImagenes barrio={barrio} setSliderVisible={setSliderVisible}/>
        <div className="contenedor-title">
          <h2 className="sub">NUESTROS MODELOS</h2>
        </div>
        <SliderModelos />
        <SectionContacto />
        <SectionContactoMob />
        {sliderVisible ? 
        <div className="contenedor-slider-galeria">
          <div className="contenedor-boton-cerrar-galeria">
            <img onClick={() => setSliderVisible(false)} src={cerrar} alt="" />
          </div>
          <SliderGaleria barrio={barrio}/>
        </div> : ""}
      </main>
    </>
  )

}

export default Barrio;
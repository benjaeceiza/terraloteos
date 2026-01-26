import { useParams } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import GaleriaImagenes from "./GaleriaImagenes";
import SliderModelos from "../desarrollos/SliderModelos"
import EncabezadoMob from "./EncabezadoMob";
import SliderGaleria from "./SliderGaleria";
import cerrar from "../../../assets/iconos/borrar.png";
import { useState } from "react";
import Detalles from "./Detalles";
import Preguntas from "../casa/Preguntas";

const Barrio = () => {
  const { nombre } = useParams();
  const barrio = barrios.find(e => e.nombre == nombre);
  const [sliderVisible, setSliderVisible] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);




  return (
    <>
      <main className="main">
        <Encabezado barrio={barrio} />
        <EncabezadoMob barrio={barrio} />
        <Detalles barrio={barrio} />
        <GaleriaImagenes barrio={barrio} setSliderVisible={setSliderVisible} setImagenSeleccionada={setImagenSeleccionada} />
        <div className="contenedor-title">
          <h2 className="sub">NUESTROS MODELOS</h2>
        </div>
        <SliderModelos />
        <div className="contenedor-title">
          <h2 className="sub">PREGUNTAS FRECUENTES</h2>
        </div>
        <Preguntas />
        <SectionContacto />
        {sliderVisible ?
          <div className="contenedor-slider-galeria">
            <div className="contenedor-boton-cerrar-galeria">
              <img onClick={() => setSliderVisible(false)} src={cerrar} alt="Cerrar" />
            </div>
            <SliderGaleria barrio={barrio} indiceInicial={imagenSeleccionada} />
          </div> : ""}
      </main>
    </>
  )

}

export default Barrio;
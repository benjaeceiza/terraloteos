import { useParams } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import GaleriaImagenes from "./GaleriaImagenes";
import SliderModelos from "../desarrollos/SliderModelos"
import EncabezadoMob from "./EncabezadoMob";
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
        <div className="contenedor-titulo-seccion my-5">
          <div className="completed-header">
            <span className="completed-subtitle">IMÁGENES</span>
            <h2 className="completed-title">GALERIA DE IMÁGENES</h2>
            <div className="completed-line"></div>
          </div>
        </div>
        <GaleriaImagenes barrio={barrio} setSliderVisible={setSliderVisible} setImagenSeleccionada={setImagenSeleccionada} />
        <div className="contenedor-title">
          <div className="completed-header">
            <span className="completed-subtitle">VIVIENDAS</span>
            <h2 className="completed-title">NUESTROS MODELOS</h2>
            <div className="completed-line"></div>
          </div>
        </div>
        <SliderModelos />
        <div className="contenedor-title">
          <div className="completed-header">
            <span className="completed-subtitle">INFORMACIÓN</span>
            <h2 className="completed-title">PREGUNTAS FRECUENTES</h2>
            <div className="completed-line"></div>
          </div>
        </div>
        <Preguntas />
        <SectionContacto />
      </main>
    </>
  )

}

export default Barrio;
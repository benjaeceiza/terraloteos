import { useEffect, useState } from "react";
import LoadingScreen from "../../LoadingScreen";
import SectionContacto from "../../SectionContacto";
import Encabezado from "./Encabezado";
import RenderBarrios from "./RenderBarrios";
import Slidermodelos from "./SliderModelos";
import EncabezadoMob from "./EncabezadoMob";

const Desarrollos = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })

  return (
    <>
      {
        isLoading
          ?
          <LoadingScreen />
          :
          <main className="main-index">
            <div className="fondo-negro-main">
              <Encabezado />
              <EncabezadoMob/>
              <div className="contenedor-title">
                <h2 className="sub">DONDE COMENZAR TU HOGAR</h2>
              </div>
              <RenderBarrios />
              <div className="contenedor-title">
                <h2 className="sub">NUESTROS MODELOS</h2>
              </div>
              <Slidermodelos />
              <SectionContacto />
            </div>
          </main>}
    </>
  )
}

export default Desarrollos;
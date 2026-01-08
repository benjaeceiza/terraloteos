import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";
import GaleriaImagenes from "./Galeriaimagenes";
import Detalles from "./Detalles";
import Preguntas from "./Preguntas";
import SliderGaleria from "./SliderGaleria";
import { useState } from "react";
import cerrar from "../../../assets/iconos/borrar.png";



const Casa = () => {
    const { tipo } = useParams();
    const casa = casas.find(e => e.tipo == tipo);
    const [sliderVisible, setSliderVisible] = useState(false);
      const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

    return (
        <>

            <main className="main">
                <Encabezado casa={casa} />
                <EncabezadoMob casa={casa} />
                <Detalles casa={casa} />
                <GaleriaImagenes casa={casa} setSliderVisible={setSliderVisible} setImagenSeleccionada={setImagenSeleccionada} />
                <div className="contenedor-title">
                    <h2 className="sub">PREGUNTAS FRECUENTES</h2>
                </div>
                <Preguntas />
                <SectionContacto />
                <SectionContactoMob />
                {sliderVisible ?
                    <div className="contenedor-slider-galeria">
                        <div className="contenedor-boton-cerrar-galeria">
                            <img onClick={() => setSliderVisible(false)} src={cerrar} alt="Cerrar" />
                        </div>
                        <SliderGaleria casa={casa} indiceInicial={imagenSeleccionada}/>
                    </div> : ""}
            </main>

        </>
    )
}

export default Casa;
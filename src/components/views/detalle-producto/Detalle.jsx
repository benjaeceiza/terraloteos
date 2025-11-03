
import { useParams } from "react-router-dom";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import Contenido from "./Contenido";
import Encabezado from "./Encabezado";
import { useEffect, useState } from "react";
import productos from "../../../data/productos.json";
import cerrar from "../../../assets/iconos/borrar.png";
import SliderGaleria from "./SliderGaleria";
import { useLoading } from "../../context/LoadingContext";
import emoticon from "../../../assets/iconos/emoticonos.png";




const Detalle = () => {

    const producto = useParams();
    const [detalleProducto, setDetalleProducto] = useState({});
    const [sliderVisible, setSliderVisible] = useState(false)

    useEffect(() => {

        const productPrev = productos.find(p => producto.id === p.nombre);
        setDetalleProducto(productPrev)

    }, [])

    const { hideLoader } = useLoading();


    return (
        <>

            {
                producto.id == "Locales Comerciales" || producto.id == "Torre Pulse"
                    ?
                    <div className="div-proximamente">
                        <h1>Proximamente</h1>
                        <img onLoad={hideLoader} src={emoticon} alt="" />
                    </div>
                    :
                    <main className={`main-${detalleProducto.clase}`}>
                        <Encabezado detalleProducto={detalleProducto} />
                        <Contenido detalleProducto={detalleProducto} setSliderVisible={setSliderVisible} />
                        {sliderVisible ?
                            <div className="contenedor-slider-galeria">
                                <div className="contenedor-boton-cerrar-galeria">
                                    <img onClick={() => setSliderVisible(false)} src={cerrar} alt="Cerrar" />
                                </div>
                                <SliderGaleria detalleProducto={detalleProducto.sliderImages} />
                            </div> : ""}
                        <SectionContacto />
                        <SectionContactoMob />
                    </main>
            }

        </>
    )
}

export default Detalle;
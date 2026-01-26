import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import productos from "../../../data/productos.json";
import { useLoading } from "../../context/LoadingContext";

// Componentes
import Encabezado from "./Encabezado";
import Contenido from "./Contenido";
import SectionContacto from "../../SectionContacto";
import SliderGaleria from "./SliderGaleria";
import cerrar from "../../../assets/iconos/borrar.png";



const Detalle = () => {
    const { id } = useParams();
    const [detalleProducto, setDetalleProducto] = useState(null);
    const [sliderVisible, setSliderVisible] = useState(false);
    const { hideLoader } = useLoading();

    useEffect(() => {
        // Buscamos por nombre (o id si cambiaste el JSON)
        const found = productos.find(p => p.nombre === id);
        if (found) {
            setDetalleProducto(found);
        }
    }, [id]);

    if (!detalleProducto) return null; // O un spinner

    return (
        <main className="detalle-wrapper">
            
            <Encabezado detalleProducto={detalleProducto} />
            
            <Contenido 
                detalleProducto={detalleProducto} 
                setSliderVisible={setSliderVisible} 
            />

            {/* LIGHTBOX MODAL */}
            {sliderVisible && (
                <div className="lightbox-modal">
                    <img 
                        src={cerrar} 
                        alt="Cerrar" 
                        className="btn-close-modal" 
                        onClick={() => setSliderVisible(false)} 
                    />
                    {/* Reutilizamos tu Slider pero ahora vive dentro del modal */}
                    <SliderGaleria 
                        detalleProducto={detalleProducto} 
                        images={detalleProducto.cardImages} 
                    />
                </div>
            )}

            <SectionContacto />
        </main>
    )
}

export default Detalle;
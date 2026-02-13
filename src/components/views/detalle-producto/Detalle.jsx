import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../../data/productos.json";
import { useLoading } from "../../context/LoadingContext";

// Componentes
import Encabezado from "./Encabezado";
import Contenido from "./Contenido";
import SectionContacto from "../../SectionContacto";




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
            <SectionContacto />
        </main>
    )
}

export default Detalle;
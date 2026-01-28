import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";

// Componentes
import Encabezado from "./Encabezado"; // Este será el nuevo súper componente
import GaleriaImagenes from "./Galeriaimagenes";
import Preguntas from "./Preguntas";
import SectionContacto from "../../SectionContacto";
import cerrar from "../../../assets/iconos/borrar.png";


const Casa = () => {
    const { tipo } = useParams();
    const [casa, setCasa] = useState(null);
    const [sliderVisible, setSliderVisible] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (tipo) {
            // Decodificamos la URL para que encuentre "Tipología A" aunque venga como "Tipología%20A"
            const nombreNormalizado = decodeURIComponent(tipo);
            const casaEncontrada = casas.find(e => e.tipo === nombreNormalizado);
            setCasa(casaEncontrada);
        }
    }, [tipo]);

    if (!casa) return <div className="loading-screen">Cargando propiedad...</div>;

    return (
        <main className="main-casa-premium">

            {/* 1. HERO SECTION: Foto principal + Todos los detalles técnicos */}
            <Encabezado casa={casa} />

            {/* 2. GALERÍA */}
            <section className="seccion-premium">
                <div className="contenedor-titulo-seccion">
                    <div className="completed-header">
                        <span className="completed-subtitle">IMÁGENES</span>
                        <h2 className="completed-title">GALERIA DE IMÁGENES</h2>
                        <div className="completed-line"></div>
                    </div>
                </div>
                <GaleriaImagenes
                    casa={casa}
                    setSliderVisible={setSliderVisible}
                    setImagenSeleccionada={setImagenSeleccionada}
                />
            </section>

            {/* 3. PREGUNTAS */}
            <section className="seccion-premium bg-darker">
                <div className="contenedor-titulo-seccion">
                    <div className="completed-header">
                        <span className="completed-subtitle">INFORMACIÓN</span>
                        <h2 className="completed-title">PREGUNTAS FRECUENTES</h2>
                        <div className="completed-line"></div>
                    </div>
                </div>
                <Preguntas />
            </section>

            {/* 4. CONTACTO */}
            <SectionContacto />



        </main>
    )
}

export default Casa;
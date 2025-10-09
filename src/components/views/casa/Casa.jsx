import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";
import GaleriaImagenes from "./Galeriaimagenes";
import Detalles from "./Detalles";
import Preguntas from "./Preguntas";


const Casa = () => {
    const { tipo } = useParams();
    const casa = casas.find(e => e.tipo == tipo);


    return (
        <>

            <main className="main">
                <Encabezado casa={casa} />
                <EncabezadoMob casa={casa} />
                <Detalles casa={casa} />
                <GaleriaImagenes casa={casa} />
                <div className="contenedor-title">
                    <h2 className="sub">PREGUNTAS FRECUENTES</h2>
                </div>
                <Preguntas />
                <SectionContacto />
                <SectionContactoMob />
            </main>

        </>
    )
}

export default Casa;
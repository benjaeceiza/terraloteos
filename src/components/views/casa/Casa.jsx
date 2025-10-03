import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";


const Casa = () => {
    const { tipo } = useParams();
    const casa = casas.find(e => e.tipo == tipo);


    return (
        <>
       
                    <main>
                        <Encabezado casa={casa} />
                        <EncabezadoMob casa={casa}/>
                        <SectionContacto />
                        <SectionContactoMob/>
                    </main>
            
        </>
    )
}

export default Casa;
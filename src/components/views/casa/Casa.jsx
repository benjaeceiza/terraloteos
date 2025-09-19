import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import LoadingScreen from "../../LoadingScreen";
import { useEffect, useState } from "react";
import EncabezadoMob from "./EncabezadoMob";
import SectionContactoMob from "../../SectionContactoMob";


const Casa = () => {
    const { tipo } = useParams();
    const casa = casas.find(e => e.tipo == tipo);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() =>{
       setTimeout(() => {
            setIsLoading(false);
       },1000)
    },[])


    return (
        <>
            {

                isLoading
                    ?
                    <LoadingScreen />
                    :
                    <main>
                        <Encabezado casa={casa} />
                        <EncabezadoMob casa={casa}/>
                        <SectionContacto />
                        <SectionContactoMob/>
                    </main>
            }
        </>
    )
}

export default Casa;
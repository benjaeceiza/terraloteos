import { useParams } from "react-router-dom";
import casas from "../../../data/casas.json";
import Encabezado from "./Encabezado";
import SectionContacto from "../../SectionContacto";
import LoadingScreen from "../../LoadingScreen";
import { useEffect, useState } from "react";


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
                        <SectionContacto />
                    </main>
            }
        </>
    )
}

export default Casa;
import { useEffect, useState } from "react";
import Mapas from "../../Mapas";
import CardContact from "./CardContacto";
import FormularioContacto from "./FormularioContacto";
import LoadingScreen from "../../LoadingScreen";

const Contacto = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false)

        },1000)
    },[])

    return (
        <>
            {
                isLoading
                    ?
                    <LoadingScreen />
                    :
                    <main className="main">
                        <div className="encabezado-contacto">
                            <h1 className="titulo-contacto">PONETE EN CONTACTO CON NOSOTROS</h1>
                        </div>
                        <CardContact />
                        <FormularioContacto />
                        <Mapas />
                    </main>}
        </>
    )
}


export default Contacto;
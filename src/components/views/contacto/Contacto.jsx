
import { useLoading } from "../../context/LoadingContext";
import Mapas from "../../Mapas";
import CardContact from "./CardContacto";
import FormularioContacto from "./FormularioContacto";


const Contacto = () => {

    const { hideLoader } = useLoading();

    setTimeout(() =>{
       hideLoader()
    },1000)

    return (
        <>
            <main className="main-contact">
                <div className="encabezado-contacto">
                    <h1 className="titulo-contacto">COMUNICATE CON NOSOTROS</h1>
                </div>
                <CardContact />
                <FormularioContacto />
                <Mapas />
            </main>
        </>
    )
}


export default Contacto;
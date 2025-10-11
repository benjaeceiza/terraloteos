import { useLoading } from "../../context/LoadingContext";
import Encabezado from "./Encabezado";


const Listado = () => {

    const { hideLoader } = useLoading();
    hideLoader()

    return (
        <>
            <main className="main">
                <Encabezado />
            </main>
        </>
    )
}

export default Listado;
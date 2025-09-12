import Categorias from "./Categorias";
import Mapas from "../../Mapas";
import Numeros from "./Numeros";
import SliderProyectos from "./SliderProyectos";
import SectionContacto from "../../SectionContacto";
import { useEffect, useState } from "react";
import LoadingScreen from "../../LoadingScreen";

const Home = () => {

    const [isLoading,setIsLoading]= useState(true)

    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      },2000)      
    },[])

    return (
        <>
          {  
              isLoading
              ?
              <LoadingScreen/>
              :
            <main className="main-index">
                <div className="fondo-negro-main">
                    <SliderProyectos />
                    <section className="section-frase">
              
                    </section>
                    <div className="contenedor-title">
                        <h2 className="sub">ELIGE QUE PARTE DE TERRALOTEOS QUIERES SER</h2>
                    </div>
                    <Categorias />
                    <div className="contenedor-title">
                        <h2 className="sub">NOSOTROS</h2>
                    </div>
                    <Numeros />
                    <div className="contenedor-title">
                        <h2 className="sub">DONDE NOS ENCONTRAMOS</h2>
                    </div>
                    <Mapas/>
                    <SectionContacto/>
                </div>
            </main>}
        </>
    )
}

export default Home;
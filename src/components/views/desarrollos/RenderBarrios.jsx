
import { Link } from "react-router-dom";
import barrios from "../../../data/barrios.json"
import { useLoading } from "../../context/LoadingContext";
import { useState } from "react";
import { div } from "framer-motion/client";


const RenderBarrios = () => {

    const { showLoader } = useLoading();
    const [isLoanding, setIsLoading] = useState(false);
    


    return (
        <>
            <section id="section-barrios" className="section-barrios">
                {barrios.map(item => (
                    <Link key={Math.random()} to={'/barrio/' + item.nombre} onClick={() => showLoader()} className="link-barrio" >
                        <div className="card-barrios">
                            <img className="fondo-card-barrio" src={item.imgPrincipal} alt="Barrio" onLoad={()=> setIsLoading(false)}/>
                            <div className="contenedor-data-barrios">
                                <img className="logo-card-barrios" src={item.logo} alt="Logo Barrio" />
                            </div>
                        </div>
                        {isLoanding
                            ?
                            <div className="spinner-barrio">
                                <div class="spinner-border text-white" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            ""}
                    </Link>
                ))}

            </section>
        </>
    )
}

export default RenderBarrios;
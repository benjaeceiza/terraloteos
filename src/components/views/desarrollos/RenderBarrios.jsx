
import { Link } from "react-router-dom";
import fondo from "../../../assets/fondos/fondo-1.jpeg";
import logo from "../../../assets/logos/merlo-village.png";
import barrios from "../../../data/barrios.json"
import { useLoading } from "../../context/LoadingContext";


const RenderBarrios = () => {
   
    const{showLoader} = useLoading();
    

    return (
        <>
            <section id="section-barrios" className="section-barrios">
              {barrios.map(item => (
                <Link key={Math.random()} to={'/barrio/'+ item.nombre} onClick={() => showLoader()} className="link-barrio" >
                    <div className="card-barrios">
                        <img className="fondo-card-barrio" src={item.imgPrincipal} alt="" />
                        <div className="contenedor-data-barrios">
                            <img className="logo-card-barrios" src={item.logo} alt="" />
                        </div>
                    </div>
                </Link>
              ))}
            
            </section>
        </>
    )
}

export default RenderBarrios;
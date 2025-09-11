import { Link } from "react-router-dom"
import logo from "../assets/iconos/wts.png"


const BotonWts = () => {
    return (
        <>
            <div className="contenedor-wts">
                <Link to={""}><img className="contacto-wts" src={logo} alt=""/></Link>
            </div>
        </>
    )
}


export default BotonWts;
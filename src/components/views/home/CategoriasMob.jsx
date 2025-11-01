

import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/logos/logo-corto.png"
import fondoThree from "../../../assets/categorias/invertir-2.jpeg"
import fondoTwo from "../../../assets/categorias/inversion.png"
import fondoOne from "../../../assets/categorias/vivir.png"
import { useLoading } from "../../context/LoadingContext";


const CategoriasMob = () => {
    const [cardOne, setCardOne] = useState(false)
    const [cardTwo, setCardTwo] = useState(false)
    const [cardThree, setCardThree] = useState(false)
    const {showLoader} = useLoading

    const agrandar = (valor) => {
        if (valor == "1") {
            setCardOne(true)
            setCardThree(false)
            setCardTwo(false)
        } else {
            if (valor == "2") {
                setCardTwo(true)
                setCardOne(false)
                setCardThree(false)
            } else {
                if (valor == "3") {
                    setCardThree(true)
                    setCardOne(false)
                    setCardTwo(false)
                }
            }
        }
    }


    return (
        <>
            <section className="section-categorias-mob">
                 
                <div className="contenedor-categorias-mob" >
                    <div className={cardOne ? "card-categoria-mob-activo" : "card-categoria-mob"}>
                        <img className="fondo-categoria-mob" src={fondoOne} alt="Fondo Vivir en un desarrollo" />
                        <div className="contenedor-title-categoria-mob" onClick={() => agrandar("1")}>
                            {cardOne ? "" : <p className="title-categoria-mob">VIVIR</p>}
                        </div>
                        {
                            cardOne
                                ?
                               
                                    <div className="contenedor-data-categoria-mob">
                                        <img className="logo-categoria-mob" src={logo} alt="Logo terraloteos" />
                                        <p className="parrafo-data-categoria-mob">Encontrá tu lugar ideal para vivir. Descubrí nuestros
                                            barrios y conocé los diferentes modelos de
                                            vivienda diseñados para vos.
                                        </p>
                                         <Link to={"/desarrollos"} onClick={() => showLoader()}><button className="boton-categoria-vermas">Ver más</button></Link>
                                    </div>
                                
                                :
                                ""
                        }

                    </div>
                    <div className={cardTwo ? "card-categoria-mob-activo" : "card-categoria-mob"}>
                        <img className="fondo-categoria-mob" src={fondoTwo} alt="Fondo invertir en un desarrollo" />
                        <div className="contenedor-title-categoria-mob" onClick={() => agrandar("2")}>
                            {cardTwo ? "" : <p className="title-categoria-mob">INVERTIR</p>}
                        </div>
                        {
                            cardTwo
                                ?
                              
                                    <div className="contenedor-data-categoria-mob">
                                        <img className="logo-categoria-mob" src={logo} alt="Logo terraloteos" />
                                        <p className="parrafo-data-categoria-mob">Hacé crecer tu capital. Invertí en propiedades
                                            diseñadas para generar ingresos y valor real en el
                                            tiempo.
                                        </p>
                                         <Link to={"/listado-productos"} onClick={() => showLoader()}><button className="boton-categoria-vermas">Ver más</button></Link>
                                    </div>
                             
                                :
                                ""
                        }

                    </div>
                    <div className={cardThree ? "card-categoria-mob-activo" : "card-categoria-mob"}>
                        <img className="fondo-categoria-mob" src={fondoThree} alt="Fondo ser parte de un desarrollo" />
                        <div className="contenedor-title-categoria-mob" onClick={() => agrandar("3")}>
                            {cardThree ? "" : <p className="title-categoria-mob">SER PARTE</p>}
                        </div>
                        {
                            cardThree
                                ?
                                    <div className="contenedor-data-categoria-mob">
                                        <img className="logo-categoria-mob" src={logo} alt="Logo terraloteos" />
                                        <p className="parrafo-data-categoria-mob">Convertite en parte de la creación de un barrio desde
                                            cero. Invertí con capital o con obras y
                                            obtené beneficios únicos.
                                        </p>
                                        <Link to={"/ser-parte-desarrollo"} onClick={() => showLoader()}><button className="boton-categoria-vermas">Ver más</button></Link>
                                    </div>
                                :
                                ""
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default CategoriasMob;
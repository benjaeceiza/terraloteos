
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/logos/logo-corto.png"
import fondoThree from "../../../assets/categorias/invertir-2.jpeg" 
import fondoTwo from "../../../assets/categorias/inversion.png" 
import fondoOne from "../../../assets/categorias/vivir.png" 


const Categorias = () => {

    const [cardOne, setCardOne] = useState(false)
    const [cardTwo, setCardTwo] = useState(false)
    const [cardThree, setCardThree] = useState(false)

    const agrandar = (valor) => {
        if (valor == "1") {
            setCardOne(true)
        } else {
            if (valor == "2") {
                setCardTwo(true)
            } else {
                if (valor == "3") {
                    setCardThree(true)
                }
            }
        }
    }

    const achicar = (valor) => {
        if (valor == "1") {
            setCardOne(false)
        } else {
            if (valor == "2") {
                setCardTwo(false)
            } else {
                if (valor == "3") {
                    setCardThree(false)
                }
            }
        }
    }

    return (
        <>
            <section className="section-categorias">
                <div className="contenedor-categorias" >
                    <Link to={"/desarrollos"}
                        id="link-categoria-1"
                        className={cardOne ? "link-activo" : "link-categoria"}
                        onMouseEnter={() => agrandar("1")}
                        onMouseLeave={() => achicar("1")}

                    >
                        <div id="categoria-1" className="contenedor-categoria">
                             <img className="fondo-categoria" src={fondoOne} alt="" />
                            <div className="fondo-negro" >
                                <p id="frase-categoria-1" className={cardOne ? "titulo-categoria-activo" : "titulo-categoria"}>Viví en nuestros desarrollos</p>
                                <div id="contenedor-data-categoria-1" className={cardOne ? "contenedor-data-categoria-activo" : "contenedor-data-categoria"}>
                                    <img  className="logo-categoria" src={logo} alt="" />
                                    <p className="parrafo-data-categoria">Encontrá tu lugar ideal para vivir. Descubrí nuestros
                                        barrios y conocé los diferentes modelos de
                                        vivienda diseñados para vos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}
                        id="link-categoria-2"
                        className={cardTwo ? "link-activo" : "link-categoria"}
                        onMouseEnter={() => agrandar("2")}
                        onMouseLeave={() => achicar("2")}>
                        <div id="categoria-2" className="contenedor-categoria">
                             <img className="fondo-categoria" src={fondoTwo} alt="" />
                            <div className="fondo-negro">
                                <p id="frase-categoria-2" className={cardTwo ? "titulo-categoria-activo" : "titulo-categoria"}>Invertí en productos Terraloteos</p>
                                <div id="contenedor-data-categoria-2" className={cardTwo ? "contenedor-data-categoria-activo" : "contenedor-data-categoria"}>
                                    <img className="logo-categoria" src={logo} alt="" />
                                    <p className="parrafo-data-categoria">Hacé crecer tu capital. Invertí en propiedades
                                        diseñadas para generar ingresos y valor real en el
                                        tiempo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={""}
                        id="link-categoria-3"
                        className={cardThree ? "link-activo" : "link-categoria"}
                        onMouseEnter={() => agrandar("3")}
                        onMouseLeave={() => achicar("3")}>
                        <div id="categoria-3" className="contenedor-categoria">
                            <img className="fondo-categoria" src={fondoThree} alt="" />
                            <div className="fondo-negro">
                                <p id="frase-categoria-3" className={cardThree ? "titulo-categoria-activo" : "titulo-categoria"}>Invertí en un desarrollo urbanístico</p>
                                <div id="contenedor-data-categoria-3" className={cardThree ? "contenedor-data-categoria-activo" : "contenedor-data-categoria"}>
                                    <img className="logo-categoria" src={logo} alt="" />
                                    <p className="parrafo-data-categoria">Convertite en parte de la creación de un barrio desde
                                        cero. Invertí con capital o con obras y
                                        obtené beneficios únicos.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>
            </section>
            <section className="section-categorias-mobile">
                <div className="contenedor-categorias">
                    <div id="categoria-1-mobile" className="contenedor-categoria">
                        <div className="fondo-negro">
                            <p id="frase-categoria-1-mobile" className="titulo-categoria">Viví en nuestros desarrollos</p>
                            <Link href="./pages/vivir-en-desarrollos.html" id="contenedor-data-categoria-1-mobile" className="contenedor-data-categoria">
                                <img className="logo-categoria" src="./recursos/logos/logo-corto.png" alt="" />
                                <p className="descripcion-categoria">Encontrá tu lugar ideal para vivir. Descubrí nuestros
                                    barrios y conocé los diferentes modelos de
                                    vivienda diseñados para vos.
                                </p>
                                <button className="boton-categoria">Click Aqui</button>
                            </Link>
                        </div>
                    </div>
                    <div id="categoria-2-mobile" className="contenedor-categoria">
                        <div className="fondo-negro">
                            <p id="frase-categoria-2-mobile" className="titulo-categoria">Invertí en productos Terraloteos</p>
                            <Link to={""} id="contenedor-data-categoria-2-mobile" className="contenedor-data-categoria">
                                <img className="logo-categoria" src="./recursos/logos/logo-corto.png" alt="" />
                                <p className="descripcion-categoria">Hacé crecer tu capital. Invertí en propiedades
                                    diseñadas para generar ingresos y valor real en el
                                    tiempo.
                                </p>
                                <button className="boton-categoria">Click Aqui</button>
                            </Link>
                        </div>
                    </div>
                    <div id="categoria-3-mobile" className="contenedor-categoria">
                        <div className="fondo-negro">
                            <p id="frase-categoria-3-mobile" className="titulo-categoria">Invertí en un desarrollo urbanístico</p>
                            <Link to={""} id="contenedor-data-categoria-3-mobile" className="contenedor-data-categoria">
                                <img className="logo-categoria" src="./recursos/logos/logo-corto.png" alt="" />
                                <p className="descripcion-categoria">Convertite en parte de la creación de un barrio desde
                                    cero. Invertí con capital o con obras y
                                    obtené beneficios únicos.
                                </p>
                                <button className="boton-categoria">Click Aqui</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Categorias;
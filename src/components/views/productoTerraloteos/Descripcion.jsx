import logo from "../../../assets/logos/torres.png"

import fotoOne from "../../../assets/productos-terraloteos/torres-1.png"
import fotoTwo from "../../../assets/productos-terraloteos/torres-2.png"
import fotoOThree from "../../../assets/productos-terraloteos/torres-3.png"

const Descripcion = () => {

    return (
        <>
            <section className="section-descripcion-producto">
                <div className="contenedor-titulo-parrafo-producto">
                    <img className="logo-descripcion-producto" src={logo} alt="" />
                    <p className="parrafo-descripcion-producto">
                        Es un moderno edificio residencial que ofrece un
                        estilo de vida único y exclusivo.
                        Con sus 4 pisos, 16 departamentos y un diseño
                        contemporáneo, esta torre te brinda la comodidad y
                        privacidad que siempre has deseado
                        Se ubican previo al ingreso del Barrio Miralba, contando
                        con un acceso ágil y cómodo, en un entorno verde y
                        cerano al centro comercial y terminal de omnibus</p>
                </div>
                <div className="contenedor-descrpciones-producto">
                    <div className="contenedor-mini-descxripcion-producto">
                        <img  className="foto-descripcion-producto" src={fotoOne} alt="Torre Community " />
                        {/* <h2 className="titulo-mini-descripcion-producto">Lorem impiun</h2>
                        <p className="parrafo-mini-descripcion">Lorem ipsum dolor sit amet consect
                        etur adipisicing elit. Dolorum molestias assumenda totam, dicta veritatis repudiandae?</p> */}
                    </div>
                    <div id="foto-medio" className="contenedor-mini-descxripcion-producto">
                        <img  className="foto-descripcion-producto" src={fotoTwo} alt="Torre Community " />
                        {/* <h2 className="titulo-mini-descripcion-producto">Lorem impiun</h2>
                        <p className="parrafo-mini-descripcion">Lorem ipsum dolor sit amet consect
                        etur adipisicing elit. Dolorum molestias assumenda totam, dicta veritatis repudiandae?</p> */}
                    </div>
                    <div className="contenedor-mini-descxripcion-producto">
                        <img  className="foto-descripcion-producto" src={fotoOThree} alt="Torre Community " />
                        {/* <h2 className="titulo-mini-descripcion-producto">Lorem impiun</h2>
                        <p className="parrafo-mini-descripcion">Lorem ipsum dolor sit amet consect
                        etur adipisicing elit. Dolorum molestias assumenda totam, dicta veritatis repudiandae?</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Descripcion;
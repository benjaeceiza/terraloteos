import logo from "../../../assets/logos/mantra.png";
import img1 from "../../../assets/productos-terraloteos/mantra.jpg";
import img2 from "../../../assets/productos-terraloteos/mantra-1.jpg";
import img3 from "../../../assets/productos-terraloteos/mantra-8.jpg";
import privadiad from "../../../assets/iconos/privacidad.png";
import naturaleza from "../../../assets/iconos/hoja.png";
import casa from "../../../assets/iconos/casa.png";


const Contenido = () => {
    return (
        <>
            <section className="contenido-mantra">
                <div className="texto-logo-mantra">
                    <p>Mantra – Cabañas Premium es un desarrollo boutique ubicado en medio de las sierras de
                        San Luis, pensado como un refugio íntimo y romántico para parejas. Todo el concepto gira en
                        torno a la conexión entre naturaleza, arquitectura y bienestar emocional, ofreciendo
                        privacidad, confort y una estética minimalista que inspira serenidad.
                        Enfocado en el escapismo natural, la reconexión y el descanso. No es un complejo residencial
                        urbano, sino una experiencia sensorial premium.
                    </p>
                    <img src={logo} alt="logo Mantra" />
                </div>

                <div className="contenedor-imagenes-mantra">
                    <img src={img1} alt="Mantra" />
                    <img src={img2} alt="Mantra" />
                    <img src={img3} alt="Mantra" />
                </div>
                <div className="caracteristicas-mantra">
                    <div className="contenedor-burbujas-mantra">
                        <div className="burbuja-mantra">
                            <img className="icono-burbujar-mantra" src={privadiad} alt="Privacidad" />
                            <p className="nombre-burbuja">Privacidad total</p>
                        </div>
                        <div className="burbuja-mantra">
                            <img className="icono-burbujar-mantra" src={naturaleza} alt="Naturaleza" />
                            <p className="nombre-burbuja">Naturaleza protagonista</p>
                        </div>
                        <div className="burbuja-mantra">
                            <img className="icono-burbujar-mantra" src={casa} alt="Cabañas" />
                            <p className="nombre-burbuja">Cabañas independientes</p>
                        </div>
                    </div>
                    <div className="contenedor-textos-mantra">
                        <p className="titulo-parrafo-mantra">Características principales</p>
                        <p className="parrafo-mantra">6 cabañas independientes, rodeadas de vegetación autóctona.<br></br>
                            Diseño minimalista y natural, con grandes ventanales y terrazas privadas.<br></br>
                            Equipamiento premium: dormitorio amplio, estar integrado, kitchenette, baño completo y jacuzzi privado.<br></br>
                            Privacidad total: sin espacios compartidos, con amplios espacios verdes entre unidades.</p>

                        <p className="titulo-parrafo-mantra">Concepto y diferencial</p>
                        <p className="parrafo-mantra">Naturaleza protagonista: las sierras y el silencio como eje central.<br></br>
                            Diseño sensorial: arquitectura integrada al paisaje, luz natural y materiales nobles.<br></br>
                            Enfoque romántico: pensado especialmente para parejas que buscan tranquilidad y reconexión.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contenido;
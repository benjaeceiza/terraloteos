import img from "../../../assets/productos-terraloteos/6.png"

const Descripcion = () => {
    return (
        <>
            <section className="section-descripcion-socio">
                <div className="contenedor-descripcion">
                    <div className="contenedor-textos-descripcion-socio">
                        <h2>Que es<span className="naranja">?</span></h2>
                        <p className="parrafo-decripcion-socio">Esta sección está pensada para quienes quieren ser parte del desarrollo desde el origen.</p>
                        <p className="parrafo-decripcion-socio">Es una nueva forma de inversión, abierta tanto a grandes inversores como a personas que
                            quieren comenzar en este mundo con acompañamiento y visión de largo plazo.</p>
                        <p className="parrafo-decripcion-socio">Te invitamos a sumarte a un modelo de negocio innovador, transparente y colaborativo. Vos no
                            solo comprás tierra: ayudás a crear un nuevo lugar en el mapa.</p>
                    </div>
                    <img src={img} alt="" />
                </div>
            </section>
        </>
    )
}

export default Descripcion;
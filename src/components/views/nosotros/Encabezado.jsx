import fondo from "../../../assets/encabezados/fondo-nosotros.jpeg"

const Encabezado = () => {
    return(
        <>
          <section className="section-encabezado-nosotros">
              <img className="fondo-encabezado-nosotros" src={fondo} alt="" />
              <div className="fondo-negro"> 
                  <div className="contenedor-titulos">
                    <h1 className="titulo-encabezado-nosotros">TERRALOTEOS</h1>
                    <h2 className="subtitulo-encabezado-nosotros">DESARROLLOS URBANISTICOS</h2>
                  </div>
              </div>
            </section>
        </>
    )
}

export default Encabezado;
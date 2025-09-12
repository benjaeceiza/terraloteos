
import fondo from "../../../assets/encabezados/vivir.jpeg"
const Encabezado = () => {

    return(
        <>
         <section className="section-encabezado-vivir-ds">
            <img className="img-encabezado-vivir-ds" src={fondo} alt=""/>
            <div className="contenedor-data-vivir-ds">
                <h1 className="sub titulo-vivir-ds">VIVÍ EN NUESTROS DESARROLLOS</h1>
                <p className="texto-vivir-ds-principal">En Terraloteos desarrollamos barrios donde la naturaleza y el
                    progreso se
                    encuentran. Si estás
                    buscando un lugar para vivir, descansar o comenzar una nueva vida, este es tu espacio.
                </p>
                <div className="contenedor-textos-vivir-ds">
                    <div className="texto-vivir-ds-secundario">
                        <p className="sub-textos-ds">Acá vas a encontrar nuestros desarrollos urbanísticos</p>
                        <p className="info-ds"> Abiertos y privados, en entornos naturales únicos, con infraestructura y
                            servicios propios. Podés comprar tu lote y elegir
                            entre
                            distintos modelos de vivienda.</p>
                    </div>
                    <div className="texto-vivir-ds-secundario">
                        <p className="sub-textos-ds">Planes</p>
                        <p className="info-ds"> Nuestros planes de construcción son escalonados, flexibles y pensados para
                            que puedas
                            mudarte con el 60% del valor abonado. El resto lo financiás con tranquilidad.</p>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Encabezado;
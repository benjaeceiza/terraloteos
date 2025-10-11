

import fondo from "../../../assets/encabezados/listado.png";
import flecha from "../../../assets/iconos/flecha-hacia-abajo.png";

const Encabezado = () => {
    return (
        <>
            <section className="encabezado-listado">
                <img className="fondo-encabezado-listado" src={fondo} alt="" />
                <div className="data-encabezado-listado">
                    <div className="textos-flecha">
                        <div className="contenedor-textos-encabezado-listado">
                            <h1>Invertí en productos Terraloteos</h1>
                            <p>¿Buscás invertir en ladrillos? En esta sección vas a encontrar nuestros productos inmobiliarios
                                con proyección y/o renta. Departamentos, dormis, complejos de cabañas, locales y mucho más.</p>
                            <button>Contactar</button>
                        </div>
                        <div className="contenedor-flecha">
                            <img src={flecha} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Encabezado;
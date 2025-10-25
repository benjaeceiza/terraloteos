import { useEffect } from "react";
import fondo from "../../../assets/encabezados/desarrollos.jpeg";
import fleca from "../../../assets/iconos/flecha-hacia-abajo.png";


const EncabezadoMob = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".texto-vivir-ds-secundario-mob");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animacion-fade-in");
            observer.unobserve(entry.target); // deja de observar una vez que apareció
          }
        });
      },
      { threshold: 0.2 } // se activa cuando 20% del elemento es visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-encabezado-vivir-ds-mob">
      <img
        className="img-encabezado-vivir-ds-mob"
        src={fondo}
        alt="fondo desarrollos"
      />
      <div className="contenedor-vivir-desarrollo-titulo-mob">
        <h1 className="titulo-vivir-ds-mob">VIVÍ EN <span className="naranja">NUESTROS</span> DESARROLLOS</h1>
        <p className="texto-vivir-ds-principal-mob">
          En Terraloteos desarrollamos barrios donde la naturaleza y el progreso
          se encuentran. Si estás buscando un lugar para vivir, descansar o
          comenzar una nueva vida, este es tu espacio.
        </p>
        <div className="contenedor-boton-flecha"
          onClick={() => {
            const section = document.querySelector("#info-vivir");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
         
        >
          <img className="flecha-encabezado-mobile" src={fleca} alt="flecha hacia abajo" />
        </div>
      </div>

      <div id="info-vivir" className="contenedor-data-vivir-ds-mob">
        <div className="contenedor-textos-vivir-ds-mob">
          <div className="texto-vivir-ds-secundario-mob">
            <p className="sub-textos-ds">
              Acá vas a encontrar nuestros desarrollos urbanísticos
            </p>
            <p className="info-ds">
              Abiertos y privados, en entornos naturales únicos, con
              infraestructura y servicios propios. Podés comprar tu lote y elegir
              entre distintos modelos de vivienda.
            </p>
          </div>
          <div className="texto-vivir-ds-secundario-mob">
            <p className="sub-textos-ds">Planes</p>
            <p className="info-ds">
              Nuestros planes de construcción son escalonados, flexibles y
              pensados para que puedas mudarte con el 60% del valor abonado. El
              resto lo financiás con tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncabezadoMob;
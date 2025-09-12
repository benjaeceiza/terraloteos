import { useEffect, useRef, useState } from "react";
import iconoReloj from "../../../assets/iconos/tiempo-restante.png";
import casco from "../../../assets/iconos/casco.png";
import iconoMapa from "../../../assets/iconos/mapa.png";
import clientes from "../../../assets/iconos/usuario.png";

const AnimatedNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(ref.current); // solo una vez
        }
      },
      { threshold: 0.5 } // se activa cuando el 50% del elemento es visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return (
    <p ref={ref} className="numeros">
      {count}
    </p>
  );
};

const Numeros = () => {
  return (
    <section className="section-numeros">
      <div className="contenedor-nosotros">
        <p>
          Terraloteos es una empresa líder en urbanización y vivienda llave en
          mano, con más de 15 años de trayectoria desde su fundación en 2010. Se
          especializa en el desarrollo de barrios abiertos y cerrados, y en la
          construcción tradicional de viviendas, con financiación propia en
          pesos o dólares. Propuesta de valor: Accesibilidad, acompañamiento
          integral, compromiso ambiental y alta calidad de vida.
        </p>
      </div>

      <div className="contendor-numero">
        <div id="container-numeros" className="container-numeros">
          <div id="card-1" className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={15} duration={1500} />
              <p className="texto-numeros">Años de experiencia</p>
            </div>
            <img
              className="icono-numeros"
              src={iconoReloj}
              alt=""
            />
          </div>

          <div id="card-2" className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={18} duration={1500} />
              <p className="texto-numeros">Proyectos entregados</p>
            </div>
            <img
              className="icono-numeros"
              src={casco}
              alt=""
            />
          </div>

          <div id="card-3" className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={4000} duration={2000} />
              <p className="texto-numeros">Clientes satisfechos</p>
            </div>
            <img
              className="icono-numeros"
              src={clientes}
              alt=""
            />
          </div>

          <div id="card-4" className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={537} duration={2000} />
              <p className="texto-numeros">Terrenos preparados</p>
              <img
                className="icono-numeros"
                src={iconoMapa}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numeros;

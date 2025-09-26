import { useEffect, useRef, useState } from "react";
import iconoReloj from "../../../assets/iconos/tiempo-restante.png";
import casco from "../../../assets/iconos/casco.png";
import iconoMapa from "../../../assets/iconos/mapa.png";
import clientes from "../../../assets/iconos/usuario.png";

const Numeros = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animacion-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px 200px 0px", // dispara 150px antes de que el elemento entre
      }
    );

    const elements = document.querySelectorAll(
      ".titulo-nosotros-home, .card-numeros, .texto-nosotros"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(ref.current);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px 200px 0px", // empieza antes de que aparezca del todo
        }
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

  return (
    <section className="section-numeros">
      <div className="contenedor-nosotros">
        <h2 className="titulo-nosotros-home">
          <span className="naranja">+</span>15 Años construyendo tu futuro
        </h2>
        <p className="texto-nosotros">
          Terraloteos es una empresa líder en urbanización y vivienda llave en
          mano, con más de 15 años de trayectoria desde su fundación en 2010. Se
          especializa en el desarrollo de barrios abiertos y cerrados, y en la
          construcción tradicional de viviendas, con financiación propia en
          pesos o dólares. Propuesta de valor: Accesibilidad, acompañamiento
          integral, compromiso ambiental y alta calidad de vida.
        </p>
      </div>

      <div className="contendor-numero">
        <div className="container-numeros">
          <div className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={15} duration={1500} />
              <div className="numero-icono">
                <p className="texto-numeros">Años de experiencia</p>
                <img className="icono-numeros" src={iconoReloj} alt="" />
              </div>
            </div>
          </div>

          <div className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={18} duration={1500} />
              <div className="numero-icono">
                <p className="texto-numeros">Proyectos entregados</p>
                <img className="icono-numeros" src={casco} alt="" />
              </div>
            </div>
          </div>

          <div className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={4000} duration={2000} />
              <div className="numero-icono">
                <p className="texto-numeros">Clientes satisfechos</p>
                <img className="icono-numeros" src={clientes} alt="" />
              </div>
            </div>
          </div>

          <div className="card-numeros">
            <div className="contenedor-textoss">
              <AnimatedNumber target={537} duration={2000} />
              <div className="numero-icono">
                <p className="texto-numeros">Terrenos preparados</p>
                <img className="icono-numeros" src={iconoMapa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numeros;

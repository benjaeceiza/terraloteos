import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import iconoReloj from "../../../assets/iconos/tiempo-restante.png";
import casco from "../../../assets/iconos/casco.png";
import iconoMapa from "../../../assets/iconos/mapa.png";
import clientes from "../../../assets/iconos/usuario.png";

const Numeros = () => {
  // ✅ Componente que mantiene la animación numérica
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
          threshold: 0.2,
          rootMargin: "0px 0px 200px 0px",
        }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!active) return;

      let start = 0;
      const increment = target / (duration / 16);
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

  // ✅ Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-numeros">
      {/* 🟠 Título y descripción */}
      <motion.div
        className="contenedor-nosotros"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="titulo-nosotros-home">
          <span className="naranja">+</span>15 Años<br></br> construyendo tu futuro
        </h2>
        <p className="texto-nosotros">
          Terraloteos es una empresa líder en urbanización y vivienda llave en
          mano, con más de 15 años de trayectoria desde su fundación en 2010. Se
          especializa en el desarrollo de barrios abiertos y cerrados, y en la
          construcción tradicional de viviendas, con financiación propia en
          pesos o dólares. Propuesta de valor: Accesibilidad, acompañamiento
          integral, compromiso ambiental y alta calidad de vida.
        </p>
      </motion.div>

      {/* 🟠 Números con animación de entrada */}
      <motion.div
        className="contendor-numero"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container-numeros">
          {[
            { icon: iconoReloj, text: "Años de experiencia", num: 15 },
            { icon: casco, text: "Proyectos entregados", num: 18 },
            { icon: clientes, text: "Clientes satisfechos", num: 4000 },
            { icon: iconoMapa, text: "Terrenos preparados", num: 537 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card-numeros"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2 + 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contenedor-textoss">
                <AnimatedNumber target={item.num} duration={2000} />
                <div className="numero-icono">
                  <p className="texto-numeros">{item.text}</p>
                  <img className="icono-numeros" src={item.icon} alt="" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Numeros;

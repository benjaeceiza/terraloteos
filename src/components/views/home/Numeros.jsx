import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import iconoReloj from "../../../assets/iconos/tiempo-restante.png";
import casco from "../../../assets/iconos/casco.png";
import iconoMapa from "../../../assets/iconos/mapa.png";
import clientes from "../../../assets/iconos/usuario.png";


const Numeros = () => {
  // ✅ Lógica del contador (Optimizada con símbolo opcional)
  const AnimatedNumber = ({ target, duration = 2000, suffix = "" }) => {
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
        { threshold: 0.2 }
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
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [active, target, duration]);

    return (
      <span ref={ref} className="numero-animado-numeros">
        {count}{suffix}
      </span>
    );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: iconoReloj, text: "Años de experiencia", num: 15, suffix: "+" },
    { icon: casco, text: "Proyectos entregados", num: 18, suffix: "" },
    { icon: clientes, text: "Clientes satisfechos", num: 4000, suffix: "+" },
    { icon: iconoMapa, text: "Terrenos preparados", num: 537, suffix: "" },
  ];

  return (
    <section className="section-numeros">
      <div className="max-width-container-numeros">
        
        {/* 🟠 Lado Izquierdo: Texto */}
        <motion.div
          className="columna-texto-numeros"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="titulo-seccion-numeros">
            <span className="naranja">+</span>15 Años
            <br /> <span className="texto-blanco-numeros">construyendo futuro</span>
          </h2>
          <div className="separador-naranja-numeros"></div>
          <p className="descripcion-seccion-numeros">
            Terraloteos es una empresa líder en urbanización y vivienda llave en
            mano. Nos especializamos en el desarrollo de barrios abiertos y cerrados,
            ofreciendo financiación propia y un compromiso real con la calidad de vida.
          </p>
        </motion.div>

        {/* 🟠 Lado Derecho: Grilla de Números */}
        <div className="columna-grid-numeros">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="card-stat-numeros"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper-numeros">
                <img src={item.icon} alt={item.text} />
              </div>
              <div className="stat-content-numeros">
                <AnimatedNumber target={item.num} suffix={item.suffix} />
                <p className="stat-label-numeros">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Numeros;
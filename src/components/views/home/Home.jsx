import { motion } from "framer-motion";
import Categorias from "./Categorias";
import Mapas from "../../Mapas";
import Numeros from "./Numeros";
import SliderProyectos from "./SliderProyectos";
import SectionContacto from "../../SectionContacto";
import SectionContactoMob from "../../SectionContactoMob";
import CategoriasMob from "./CategoriasMob";
import check from "../../../assets/iconos/check.png";
import fondo from "../../../assets/fondos/fondo-main.png";

const Home = () => {
  return (
    <main className="main-index">
      <img src={fondo} alt="Fondo" className="fondo-img" />
      <div className="contenido">
        <SliderProyectos />

  
        <motion.section
          className="section-frase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contenedor-frase">
            {["CONSTRUIMOS", "|", "DESARROLLAMOS", "|", "INVERTIMOS"].map(
              (texto, i) => (
                <motion.p
                  key={i}
                  className={`frase ${texto === "|" ? "naranja" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {texto === "|" ? <span className="naranja">|</span> : texto}
                </motion.p>
              )
            )}
          </div>
        </motion.section>


        <motion.section
          className="section-frase-mob"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contenedor-frase-mob">
            <ul className="lista-frase">
              {["CONSTRUIMOS", "DESARROLLAMOS", "INVERTIMOS"].map((texto, i) => (
                <motion.li
                  key={i}
                  className="item-frase"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.25,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <img src={check} alt="check" />
                  <p className="frase-mob">{texto}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="contenedor-title">
          <h2 className="sub">ELEGÍ TU LUGAR EN TERRALOTEOS</h2>
        </div>

        <Categorias />
        <CategoriasMob />

        <div className="contenedor-title">
          <h2 className="sub">NOSOTROS</h2>
        </div>

        <Numeros />

        <div className="contenedor-title">
          <h2 className="sub">DONDE NOS ENCONTRAMOS</h2>
        </div>

        <Mapas />
        <SectionContacto />
        <SectionContactoMob />
      </div>
    </main>
  );
};

export default Home;

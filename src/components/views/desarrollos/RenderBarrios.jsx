import { Link } from "react-router-dom";
import barrios from "../../../data/barrios.json";
import { useLoading } from "../../context/LoadingContext";
import { useState } from "react";

const RenderBarrios = () => {
  const { showLoader } = useLoading();

  // estado por item (true = cargando)
  const [loadingImages, setLoadingImages] = useState({});

  const handleImageLoad = (nombre) => {
    setLoadingImages(prev => ({
      ...prev,
      [nombre]: false,
    }));
  };

  const handleImageStart = (nombre) => {
    setLoadingImages(prev => ({
      ...prev,
      [nombre]: true,
    }));
  };

  return (
    <section id="section-barrios" className="section-barrios">
      {barrios.map(item => {
        const isLoading = loadingImages[item.nombre];

        return (
          <Link
            key={item.nombre}
            to={`/barrio/${item.nombre}`}
            onClick={showLoader}
            className="link-barrio"
          >
            <div className="card-barrios">
              {isLoading && (
                <div className="spinner-barrio">
                  <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              <img
                className="fondo-card-barrio"
                src={item.imgPrincipal}
                alt="Barrio"
                onLoad={() => handleImageLoad(item.nombre)}
                onError={() => handleImageLoad(item.nombre)}
                onLoadStart={() => handleImageStart(item.nombre)}
              />

              <div className="contenedor-data-barrios">
                <img
                  className="logo-card-barrios"
                  src={item.logo}
                  alt="Logo Barrio"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default RenderBarrios;

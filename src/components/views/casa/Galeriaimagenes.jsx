import  { useState } from "react";


const GaleriaImagenes = ({ casa,setSliderVisible}) => {
    const [loadedImages, setLoadedImages] = useState({});

    const handleLoadImage = (index) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <section className="galeria-imagenes">
            {casa.galeriaImagenes &&
                casa.galeriaImagenes.map((img, index) => (
                    <div className="box" key={index}>
                        <img
                            src={img}
                            alt={`imagen-${index}`}
                            className={`box-img ${loadedImages[index] ? "visible" : "hidden"}`}
                            onLoad={() => handleLoadImage(index)}
                            onClick={() => setSliderVisible(true)}
                        />

                        {!loadedImages[index] && (
                            <div className="conteiner-spinner-img">
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </section>
    );
};

export default GaleriaImagenes;
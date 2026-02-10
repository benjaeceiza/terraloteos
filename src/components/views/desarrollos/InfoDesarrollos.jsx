import { useEffect, useRef, useState } from 'react';


const InfoDesarrollos = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cuando el elemento entra en pantalla (viewport)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Dejar de observar una vez animado
                }
            },
            { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="info-desarrollos" className="info-section-container" ref={sectionRef}>
            <div className={`info-cards-wrapper ${isVisible ? 'animar-entrada' : ''}`}>
                
                {/* Tarjeta 1 */}
                <div className="info-card-pro">
                    <div className="card-icon-line"></div>
                    <h3 className="card-title-pro">Desarrollos Urbanísticos</h3>
                    <p className="card-text-pro">
                        Abiertos y privados, en entornos naturales únicos, con
                        infraestructura y servicios propios. Podés comprar tu lote y
                        elegir entre distintos modelos de vivienda.
                    </p>
                </div>

                {/* Tarjeta 2 */}
                <div className="info-card-pro">
                    <div className="card-icon-line"></div>
                    <h3 className="card-title-pro">Planes Flexibles</h3>
                    <p className="card-text-pro">
                        Nuestros planes de construcción son escalonados y pensados para
                        que puedas mudarte con el 60% del valor abonado. El resto lo
                        financiás con tranquilidad.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default InfoDesarrollos;
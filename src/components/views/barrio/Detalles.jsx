import lote from "../../../assets/iconos/lote.png";
import diferenciales from "../../../assets/iconos/diferenciales.png";
import distancia from "../../../assets/iconos/distancia.png";


const Detalles = ({ barrio }) => {
    return (
        <section className="specs-bar-container-barrio">
            <div className="specs-grid-barrio">
                
                {/* ITEM 1: LOTES */}
                <div className="spec-card-barrio">
                    <div className="spec-icon-wrapper-barrio">
                        <img src={lote} alt="Lotes" />
                    </div>
                    <div className="spec-content-barrio">
                        <span className="spec-title-barrio">Superficie</span>
                        <span className="spec-value-barrio">
                            {isNaN(barrio.lotes) 
                                ? barrio.lotes 
                                : `Desde ${barrio.lotes} m²`
                            }
                        </span>
                    </div>
                </div>

                {/* ITEM 2: DIFERENCIALES */}
                <div className="spec-card-barrio">
                    <div className="spec-icon-wrapper-barrio">
                        <img src={diferenciales} alt="Diferenciales" />
                    </div>
                    <div className="spec-content-barrio">
                        <span className="spec-title-barrio">Propuesta</span>
                        <span className="spec-value-barrio">{barrio.diferenciales}</span>
                    </div>
                </div>

                {/* ITEM 3: DISTANCIAS */}
                <div className="spec-card-barrio highlight-barrio">
                    <div className="spec-icon-wrapper-barrio">
                        <img src={distancia} alt="Distancias" />
                    </div>
                    <div className="spec-content-barrio">
                        <span className="spec-title-barrio">Ubicación</span>
                        <span className="spec-value-barrio">{barrio.distancias}</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Detalles;

const GaleriaImagenes = ({ barrio }) => {




    return (
        <>
            <section className="galeria-imagenes">
                {
                    
                    barrio.galeriaImagenes
                       ?
                           barrio.galeriaImagenes.map(e => (
                           
                        <div className="box" key={Math.random()} >
                            <img src={e} alt="e" />
                            <div className="filter">
                            </div>
                        </div>
                      
                    ))
                    :
                    ""             
            
            }
            </section>
        </>
    )
}


export default GaleriaImagenes;
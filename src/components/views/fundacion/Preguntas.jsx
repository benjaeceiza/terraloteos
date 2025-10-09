
const Preguntas = () => {
    return (
        <>
            <section className="section-preguntas">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Qué es la Fundación Grupo Terra?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Es una iniciativa sin fines de lucro impulsada por Terraloteos, con sede en Villa de Merlo,
                                enfocada en la reforestación y el desarrollo de proyectos educativos y sociales con la niñez y el
                                medioambiente como ejes principales.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Qué actividades realizan?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Actualmente estamos desarrollando un vivero propio, donde producimos especies para
                                reforestar, abastecer desarrollos sustentables y crear productos regionales. También
                                planificamos talleres educativos, alianzas con escuelas y capacitaciones con especialistas.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Cómo puedo colaborar?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Podés sumarte como voluntario/a, hacer donaciones de materiales o adquirir productos del
                                vivero. Más adelante lanzaremos programas de padrinazgo de árboles y talleres abiertos a la
                                comunidad.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ¿Trabajan con escuelas o instituciones?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Sí, uno de nuestros objetivos es fortalecer el vínculo entre las infancias y la naturaleza. Estamos
                                generando convenios con escuelas para realizar visitas, proyectos conjuntos y talleres
                                educativos.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                ¿La fundación trabaja sólo en Villa de Merlo?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Nuestra sede está en Villa de Merlo, pero la visión de impacto es provincial. A medida que la
                                fundación crezca, proyectamos acciones en distintos puntos de San Luis.</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Preguntas;
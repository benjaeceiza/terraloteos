
const Preguntas = () => {
    return (
        <>
            <section className="section-preguntas">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Qué significa participar de un desarrollo?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Es sumarte desde el inicio a la creación de un barrio. Podés ingresar con capital o con obras,
                                como socio inversor.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Qué gano con esto?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Accedés a beneficios por estar desde la etapa inicial: más rentabilidad, acceso a productos a
                                precio de costo y participación en las decisiones del proyecto.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Hay riesgos?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Terraloteos desarrolla sus propios barrios, lo que nos permite tener control total sobre cada
                                etapa del proyecto. Esto reduce significativamente los imprevistos y nos permite proyectar con
                                claridad el crecimiento del valor de la tierra. Como en toda inversión, hay factores externos que
                                pueden influir, pero nuestro modelo prioriza la transparencia y el respaldo técnico.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ¿Terraloteos es una inmobiliaria?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">No. Somos una desarrolladora urbanística con más de 15 años de experiencia en San Luis.
                                Creamos barrios, construimos viviendas, y también ofrecemos oportunidades de inversión.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                ¿Puedo invertir desde otra provincia?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Sí. Muchos de nuestros clientes viven en Buenos Aires, Córdoba o incluso en el exterior.
                                Acompañamos todo el proceso de forma remota.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                ¿Qué documentación entregan?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">En los lotes con escritura, se entrega la escritura traslativa. En viviendas, se realiza un
                                contrato de obra y luego escritura del lote con mejoras.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Preguntas;
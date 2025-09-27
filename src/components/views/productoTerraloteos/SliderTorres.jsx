

import cerrar from "../../../assets/iconos/cerrar.png";

const SliderTorres = ({isTrue,setIsTrue}) => {


    return (
        <>

            {
                isTrue
                    ?
                    <div className="contenedor-slider-imagenes-torres" >
                        <div className="contenedor-boton-cerrar">
                            <img onClick={() => setIsTrue(false)} src={cerrar} alt="" />
                        </div>
                        <div id="carouselExampleRide" className="carousel slide slide-torres" data-bs-ride="true">
                            <div className="carousel-inner contenedor-slider-torres">
                                <div className="carousel-item active item-slider-torres">
                                    <img src={"https://i.postimg.cc/fy3yTtzx/20240815-124337.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/L5q56Y99/20240815-124343.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/Zn9nKBbB/20240815-124433.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/cHk6SMSx/20240815-124641.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/LXQhpBpR/20240815-124750.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/yd8Wtp2P/20240815-124829.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/MT3XSb8C/20240815-124955.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/9MQzKgv3/20240815-125016.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                                <div className="carousel-item item-slider-torres">
                                    <img src={"https://i.postimg.cc/pXwhrZn2/20240815-125028.jpg"} className="d-block w-100 img-slider-torres" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    :
                    ""}
        </>
    )
}

export default SliderTorres;


import { useRef, useState } from "react";

const SliderTorres = () => {

    const [index, setIndex] = useState(0);

    const images = [
        "https://i.postimg.cc/fy3yTtzx/20240815-124337.jpg",
         "https://i.postimg.cc/Zn9nKBbB/20240815-124433.jpg",
          "https://i.postimg.cc/cHk6SMSx/20240815-124641.jpg",
           "https://i.postimg.cc/L5q56Y99/20240815-124343.jpg",
           "https://i.postimg.cc/LXQhpBpR/20240815-124750.jpg",
           "https://i.postimg.cc/yd8Wtp2P/20240815-124829.jpg",
           "https://i.postimg.cc/MT3XSb8C/20240815-124955.jpg",
           "https://i.postimg.cc/pXwhrZn2/20240815-125028.jpg",
           "https://i.postimg.cc/5yk0Yjw2/IMG-0043.jpg"
        ]
    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="slider-galeria">
            <div
                className="slider-inner-galeria"
                style={{ transform: `translateX(${-index * 100}%)` }}
            >
                 {images.map((img, i) => (
                    <div className="slide-galeria" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>

            <button className="btn-galeria prev-galeria" onClick={prevSlide}>
                ‹
            </button>
            <button className="btn-galeria next-galeria" onClick={nextSlide}>
                ›
            </button>
        </div>
    );
};

export default SliderTorres;

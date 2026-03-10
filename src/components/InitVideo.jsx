import { useState, useEffect } from 'react';

const InitVideo = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Revisamos si ya entró antes
        const hasVisited = localStorage.getItem('hasVisited');

        if (hasVisited) {
            // Si ya lo vio, no renderizamos nada y avisamos al padre al toque
            setShouldRender(false);
            onComplete();
        }
    }, [onComplete]);

    const handleClose = () => {
        // 1. Guardamos la marca para la próxima vez
        localStorage.setItem('hasVisited', 'true');

        // 2. Activamos el estado para que empiece el fade-out de CSS
        setIsFading(true);

        // 3. Esperamos medio segundo (500ms) a que termine la animación
        // y recién ahí desmontamos el video y cargamos la web
        setTimeout(() => {
            setShouldRender(false);
            onComplete();
        }, 500);
    };

    // Si ya lo había visto, devolvemos null para que no ocupe lugar en el DOM
    if (!shouldRender) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                zIndex: 9999999999, // Nos aseguramos de que tape toda la página
                opacity: isFading ? 0 : 1, // Acá ocurre la magia del fade-out
                transition: 'opacity 0.5s ease-in-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <video
                autoPlay
                muted
                playsInline // ¡Clave para celulares y Safari!
                onEnded={handleClose}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
                {/* Le agregué q_auto,f_auto a tu URL para que cargue a la velocidad de la luz */}
                <source
                    src="https://res.cloudinary.com/dmnksm3th/video/upload/q_auto,f_auto/v1772833397/video-inicio_jzr9kg.mp4"
                    type="video/mp4"
                />
                Tu navegador no soporta el video.
            </video>

            <button
                onClick={handleClose} // Si hace clic, también llama a handleClose
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    padding: '10px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)', // Un efectito extra para que quede fachero
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
                Omitir intro
            </button>
        </div>
    );
};

export default InitVideo;
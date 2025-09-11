const cardOne = document.getElementById("card-1");
const numeroOne = document.getElementById("numero-1");
const numeroTwo = document.getElementById("numero-2");
const numeroThree = document.getElementById("numero-3");
const numeroFour = document.getElementById("numero-4");

// función para animar números
function animateNumber(element, target, duration = 2000) {
    let start = 0;
    let startTime = null;

    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = Math.floor(progress * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // acá disparás tus animaciones
            animateNumber(numeroOne, 15);   // ejemplo: llega hasta 1500
            animateNumber(numeroTwo, 25);    // ejemplo: llega hasta 300
            animateNumber(numeroThree, 4000);   // ejemplo: llega hasta 75
            animateNumber(numeroFour,50);    // ejemplo: llega hasta 50

            observer.unobserve(entry.target); // deja de observar para no repetir
        }
    });
}, { threshold: 0.5 });

observer.observe(cardOne);

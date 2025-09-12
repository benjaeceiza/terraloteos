
window.addEventListener('scroll', function () {

    let headerOne = document.getElementById("header");
    let nav = document.getElementById("container-fluid");

    let posicionObj1 = headerOne.getBoundingClientRect().top;
    let tamanoPantallaTextos = window.pageYOffset;




    if (posicionObj1 = tamanoPantallaTextos) {
        headerOne.style.backgroundColor = '#133222'
        headerOne.style.transition = "all .5s"
        nav.style.backgroundColor = '#133222'
        nav.style.transition = "all .5s",
        headerOne.style.borderBottom = "1px solid rgb(165, 165, 165)"


    }


    if (tamanoPantallaTextos == 0) {
        headerOne.style.backgroundColor = 'transparent'
        headerOne.style.transition = "all .5s"
        nav.style.backgroundColor = 'transparent'
        nav.style.transition = "all .5s"
        headerOne.style.borderBottom = "none"
    }




})

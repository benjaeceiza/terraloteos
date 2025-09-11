const sectionBarrios = document.getElementById("section-barrios");


fetch("../data/barrios.json")
    .then(respose => respose.json())
    .then(data => renderBarrios(data))

const renderBarrios = (data) => {
    data.forEach(e => {
        const cardContainer = document.createElement("a");
        cardContainer.href = `./barrio.html?barrio=${e.nombre}`;
        cardContainer.className = "card-barrios";

    

        const fondoCard = document.createElement("img");
        fondoCard.className = "fondo-card-barrio";
        fondoCard.src = e.imgPrincipal;

        const contenedorDataBarrio = document.createElement("div");
        contenedorDataBarrio.className = "contenedor-data-barrios";

        const logoBarrio = document.createElement("img");
        logoBarrio.className = "logo-card-barrios";
        logoBarrio.src = e.logo


        contenedorDataBarrio.appendChild(logoBarrio);
        cardContainer.appendChild(contenedorDataBarrio);
        cardContainer.appendChild(fondoCard);
        sectionBarrios.appendChild(cardContainer);
    });

}





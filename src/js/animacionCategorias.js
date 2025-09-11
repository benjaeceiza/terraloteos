const categoriaOne = document.getElementById("categoria-1")
const categoriaTwo = document.getElementById("categoria-2")
const categoriaThree = document.getElementById("categoria-3")

const categoriaOneMobile = document.getElementById("categoria-1-mobile")
const categoriaTwoMobile = document.getElementById("categoria-2-mobile")
const categoriaThreeMobile = document.getElementById("categoria-3-mobile")

const fraseOne = document.getElementById("frase-categoria-1")
const fraseTwo = document.getElementById("frase-categoria-2")
const fraseThree = document.getElementById("frase-categoria-3")

const fraseOneMobile = document.getElementById("frase-categoria-1-mobile")
const fraseTwoMobile = document.getElementById("frase-categoria-2-mobile")
const fraseThreeMobile = document.getElementById("frase-categoria-3-mobile")

const dataOne = document.getElementById("contenedor-data-categoria-1")
const dataTwo = document.getElementById("contenedor-data-categoria-2")
const dataThree = document.getElementById("contenedor-data-categoria-3")

const dataOneMobile = document.getElementById("contenedor-data-categoria-1-mobile")
const dataTwoMobile = document.getElementById("contenedor-data-categoria-2-mobile")
const dataThreeMobile = document.getElementById("contenedor-data-categoria-3-mobile")


 const agrandarOne = () => {

   categoriaOne.style.width = "80%"
   categoriaOne.style.transition = "all .5s"
   dataOne.style.display = "flex";
   fraseOne.style.display = "none"


}
 const agrandarTwo = (variable, data, frase) => {

   variable.style.width = "80%"
   variable.style.transition = "all .5s"
   data.style.display = "flex";
   frase.style.display = "none"


}
 const agrandarThree = (variable, data, frase) => {

   variable.style.width = "80%"
   variable.style.transition = "all .5s"
   data.style.display = "flex";
   frase.style.display = "none"


}


const achicar = (variable, data, frase) => {

   variable.style.width = "35%";
   data.style.display = "none";
   frase.style.display = "block"
}


const agrandarMobile = (variable, data, frase) => {

   variable.style.transition = "all .5s"
   data.style.display = "flex";
   frase.style.display = "none"


}


const achicarMobile = (variable, data, frase) => {

   variable.style.width = "35%";
   data.style.display = "none";
   frase.style.display = "block"
}




// CATEGORIA DESKTOP

categoriaOne.onmouseenter = () => agrandar(categoriaOne, dataOne, fraseOne);
categoriaOne.onmouseleave = () => achicar(categoriaOne, dataOne, fraseOne);
categoriaTwo.onmouseenter = () => agrandar(categoriaTwo, dataTwo, fraseTwo);
categoriaTwo.onmouseleave = () => achicar(categoriaTwo, dataTwo, fraseTwo);
categoriaThree.onmouseenter = () => agrandar(categoriaThree, dataThree, fraseThree);
categoriaThree.onmouseleave = () => achicar(categoriaThree, dataThree, fraseThree);

// // CATEGORIA MOBILE

categoriaOneMobile.onclick = () => achicarMobile(categoriaOneMobile, dataOneMobile, fraseOneMobile);
categoriaTwoMobile.onclick = () => agrandarMobile(categoriaTwoMobile, dataTwoMobile, fraseTwoMobile);
categoriaThreeMobile.onclick = () => agrandarMobile(categoriaOneMobile, dataThreeMobile, fraseThreeMobile);


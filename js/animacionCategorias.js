 const categoriaOne = document.getElementById("categoria-1")
 const categoriaTwo = document.getElementById("categoria-2")
 const categoriaThree = document.getElementById("categoria-3")
 const fraseOne = document.getElementById("frase-categoria-1")
 const fraseTwo = document.getElementById("frase-categoria-2")
 const fraseThree = document.getElementById("frase-categoria-3")
 const dataOne = document.getElementById("contenedor-data-categoria-1")
 const dataTwo = document.getElementById("contenedor-data-categoria-2")
 const dataThree = document.getElementById("contenedor-data-categoria-3")



 const agrandar = (variable,data,frase) => {
    variable.style.width = "80%"
    variable.style.transition = "all 1s"
    data.style.display = "flex";
    frase.style.display = "none"

 
 }


 const achicar = (variable,data,frase) => {

     variable.style.width = "35%";
      data.style.display = "none";
       frase.style.display = "block"
 }

 categoriaOne.onmouseenter = () => agrandar(categoriaOne,dataOne,fraseOne)
 categoriaOne.onmouseleave = () => achicar(categoriaOne,dataOne,fraseOne)
 categoriaTwo.onmouseenter = () => agrandar(categoriaTwo,dataTwo,fraseTwo)
 categoriaTwo.onmouseleave = () => achicar(categoriaTwo,dataTwo,fraseTwo)
 categoriaThree.onmouseenter = () => agrandar(categoriaThree,dataThree,fraseThree)
 categoriaThree.onmouseleave = () => achicar(categoriaThree,dataThree,fraseThree)
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNeevHRjkmb2JbherFIOzeXXK1mJavZTI",
    authDomain: "terraloteos-3782a.firebaseapp.com",
    projectId: "terraloteos-3782a",
    storageBucket: "terraloteos-3782a.firebasestorage.app",
    messagingSenderId: "575956692126",
    appId: "1:575956692126:web:1eea644d820cf041439f8f",
    measurementId: "G-S4N6W0WCD6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  



// const urlParams = new URLSearchParams(window.location.search);
// const nombreBarrio = urlParams.get('barrio');

// fetch("../data/barrios.json")
// .then(response => response.json())
// .then(data => renderBarrio(data));


// const renderBarrio = (data) => {
//    const barrio = data.filter(e => e.nombre == nombreBarrio)
//    const contenedor = document.getElementById("contenedor");
  
//    barrio.map(e => {
//        const titulo = document.getElementById("titulo-barrio");
//         titulo.innerText = e.nombre
//        const logo = document.getElementById("logo");
//        logo.src = e.logo
//        logo.style.backgroundColor = "red"
//        const img = document.getElementById("img");
//         img.src = e.imgPrincipal

//    }) 

    
   

// }




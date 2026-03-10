import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/views/home/Home';
import Nosotros from './components/views/nosotros/Nosotros';
import Desarrollos from './components/views/desarrollos/Desarrollos';
import Contacto from './components/views/contacto/Contacto';
import Barrio from './components/views/barrio/Barrio';
import Fundacion from './components/views/fundacion/Fundacion';
import Casa from './components/views/casa/Casa';
import ScrollManager from './components/ScrollManager';
import { LoadingProvider, useLoading } from './components/context/LoadingContext';
import { useEffect, useState } from 'react'; // Agregamos useState
import SerSocio from './components/views/socio/SerSocio';
import Listado from './components/views/listado-productos/Listado';
import NavbarMob from './components/NavbarMob';
import Detalle from './components/views/detalle-producto/Detalle';
import { ToastContainer } from 'react-toastify';
import FloatingBot from './components/terrabot/FloatingBot';
import InitVideo from './components/InitVideo';

const AppContent = () => {
  const location = useLocation();
  const { showLoader } = useLoading();

  // Estado para controlar si mostramos la app o seguimos en el video
  const [appReady, setAppReady] = useState(() => {
    // Leemos el dato de forma síncrona apenas carga la app
    const hasVisited = localStorage.getItem('hasVisited');
    return hasVisited === 'true'; // Si existe y es true, arranca lista. Si no, arranca en false.
  });

  useEffect(() => {
    // Solo mostramos el loader de las rutas si la app ya está lista
    if (appReady) {
      showLoader();
    }
  }, [location.pathname, appReady]); // Sumamos appReady a las dependencias

  return (
    <>
      {/* El InitVideo maneja su lógica y nos avisa cuando termina */}
      {!appReady && <InitVideo onComplete={() => setAppReady(true)} />}

      {/* Solo renderizamos el contenido real cuando appReady es true */}
      {appReady && (
        <>
          <Navbar />
          <NavbarMob />
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/fundacion" element={<Fundacion />} />
            <Route path="/desarrollos" element={<Desarrollos />} />
            <Route path="/ser-parte-desarrollo" element={<SerSocio />} />
            <Route path="/listado-productos" element={<Listado />} />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="/barrio/:nombre" element={<Barrio />} />
            <Route path="/casa/:tipo" element={<Casa />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <ToastContainer />
          <FloatingBot />
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
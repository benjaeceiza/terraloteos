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
import ProductoTerraloteos from './components/views/detalle-producto/ProductoTerraloteos';
import ScrollManager from './components/ScrollManager';
import { LoadingProvider, useLoading } from './components/context/LoadingContext';
import { useEffect } from 'react';
import SerSocio from './components/views/socio/SerSocio';
import Listado from './components/views/listado-productos/Listado';



const AppContent = () => {
  const location = useLocation();
  const { showLoader } = useLoading();


  useEffect(() => {
    showLoader();
  }, [location.pathname]);

 


  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/fundacion" element={<Fundacion />} />
        <Route path="/desarrollos" element={<Desarrollos />} />
        <Route path="/ser-parte-desarrollo" element={<SerSocio />} />
        <Route path="/listado-productos" element={<Listado />} />
        <Route path="/producto" element={<ProductoTerraloteos />} />
        <Route path="/barrio/:nombre" element={<Barrio />} />
        <Route path="/casa/:tipo" element={<Casa />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
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
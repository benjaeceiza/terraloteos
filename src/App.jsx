import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/views/home/Home';
import Nosotros from './components/views/Nosotros';
import Footer from './components/Footer';
import Desarrollos from './components/views/desarrollos/Desarrollos';
import Contacto from './components/views/contacto/Contacto';
import Barrio from './components/views/barrio/Barrio';
import BotonWts from './components/BotonWts';

import Fundacion from './components/views/fundacion/fundacion';
import ScrollManager from './components/ScrollManager';
import Casa from './components/views/casa/Casa';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
       <ScrollManager/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/nosotros'} element={<Nosotros />} />
          <Route path={'/fundacion'} element={<Fundacion />} />
          <Route path={'/desarrollos'} element={<Desarrollos />} />
          <Route path={'/barrio/:nombre'} element={<Barrio />} />
          <Route path={'/casa/:tipo'} element={<Casa />} />
          <Route path={'/contacto'} element={<Contacto />} />
        </Routes>
        <BotonWts />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

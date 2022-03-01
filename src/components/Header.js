import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from '../App';
import About from '../routes/About';
import Cookie from '../routes/Cookie';
import Privacidad from '../routes/Privacidad';
import Terminos_de_uso from '../routes/Terminos_de_uso';
import Menu from '../routes/Menu';
import Simple from '../routes/lista/Simple';
import Exquisita from '../routes/lista/Exquisita';
import Monstruosa from '../routes/lista/Monstruosa';
import PageNotFound from '../routes/PageNotFound';
import BrandLogo from '../assets/img/mr-burger.png';
function Header() {
  return (
    <header>
      <BrowserRouter>
        <div className='header-container'>
          {/* menu escritorio */}
          <div className='desktop'>
            <div className='brand'>
              <img src={BrandLogo} className="brand-logo" alt="brand logo" />
            </div>
            <nav>
              <Link to="/">Inicio</Link>
              <Link to="about">Acerca de</Link>
            </nav>
          </div>
          {/* menu mobil */}
          <div className='mobile'></div>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="cookie" element={<Cookie />} />
          <Route path="privacidad" element={<Privacidad />} />
          <Route path="terminos-de-uso" element={<Terminos_de_uso />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/simple" element={<Simple />} />
          <Route path="menu/exquisita" element={<Exquisita />} />
          <Route path="menu/monstruosa" element={<Monstruosa />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}


export default Header;
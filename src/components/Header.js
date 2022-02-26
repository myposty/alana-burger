import React from 'react';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import App from '../App';
import About from '../routes/About';
function Header() {
    return (
        <header>
      <BrowserRouter>
        <nav>
        <Link to="/">Inicio</Link>
        <Link to="about">Acerca de</Link>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
        </header>
    );
  }


  export default Header;
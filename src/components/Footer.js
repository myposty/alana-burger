import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mrBurger from '../assets/img/mr-burger.png';
function Footer() {
  return (
    <BrowserRouter>
      <footer className='footer'>
        <div className='footer--container'>
          <div className='about--us'>
            <div className='about--container'>
              <div className='about--img'>
                <img src={mrBurger} alt="logo footer" className='footer--logo' />
              </div>
              <div className='about--desc'>
                <h1>About</h1>
                <p className='desc-parrafo'>
                  sdfhkjbaskjdhfbkajshdbfkjsahdbfkja
                  shbdfkjashdbfhsbdfkjashbdfkjhasbdf
                  kjhasbdfkjhasbdfkjhsbdkfjhbsadkfjh</p>
              </div>
            </div>
          </div>
          <div className='social--media'>
            <ul>
              <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href='#'><ion-icon name="mail-outline"></ion-icon></a></li>
            </ul>
          </div>

          <div className='important-link'>
            <ul>
              <li><a href='cookie'>cookie</a></li>
              <li><a href='terminos-de-uso'>terminos de uso</a></li>
              <li><a href='privacidad'>privacidad</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </BrowserRouter>

  );
}
export default Footer;
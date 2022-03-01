
import './assets/css/Main.css';

import mrBurger from './assets/img/mr-burger.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mrBurger} className="App-logo" alt="logo" />
        <h1>Hamburguesería Nombre</h1>
        <p>
          Proximamente nuestra web de ventas de hamburguesas
        </p>

      </header>
      <br />
      {/* row */}
      <div className="menu--section">
        <div className="row--menu">
          <a href="menu/simple" className="col--menu">
            <div className="img--container">
              < img src={mrBurger} alt="imagen de menu" className="col--img" />
            </div>
            <div className="menu--description">
              <h1>Simple</h1>
              <h2>Ingredientes</h2>
              <ul>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
              </ul>
            </div>
          </a>

          <a href="menu/exquisita" className="col--menu">
            <div className="img--container">
              < img src={mrBurger} alt="imagen de menu" className="col--img" />
            </div>
            <div className="menu--description">
              <h1>exquisita</h1>
              <h2>Ingredientes</h2>
              <ul>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
              </ul>
            </div>
          </a>

          <a href="menu/monstruosa" className="col--menu">
            <div className="img--container">
              < img src={mrBurger} alt="imagen de menu" className="col--img" />
            </div>
            <div className="menu--description">
              <h1>Monstruosa</h1>
              <h2>Ingredientes</h2>
              <ul>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
                <li>Nose</li>
              </ul>
            </div>
          </a>
        </div>
        <a
          className="mas-menu"
          href="menu"
        >
          Ver más...
        </a>
      </div>
    </div>
  );
}

export default App;

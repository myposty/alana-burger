
import './assets/css/Main.css';

import mrBurger from './assets/img/mr-burger.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mrBurger} className="App-logo" alt="logo" />
        <h1>Hamburguesería Alana</h1>
        <p>
          Proximamente nuestra web de ventas de hamburguesas
        </p>
        <a
          className="App-link"
          href="about"
        >
          Acerca de
        </a>
      </header>
    </div>
  );
}

export default App;

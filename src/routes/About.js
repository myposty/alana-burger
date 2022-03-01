import '../assets/css/Main.css';
import logo from '../assets/img/mr-burger.png';
function About() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>¿Que es nombre Burger?</h2>
        <a
          className="App-link"
          href="/"
        >
          Volver al inicio
        </a>
      </header>
    </div>
  );
}
export default About;

import '../assets/css/Main.css';
import logo from '../assets/img/mr-burger.png';
function Terminos_de_uso() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Terminos de uso <ion-icon name="accessibility-outline"></ion-icon></h2>
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
export default Terminos_de_uso;
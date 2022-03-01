import '../assets/css/Main.css';
import logo from '../assets/img/mr-burger.png';
function Cookie() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>¿Que son las cookies? <i class="fa-solid fa-cookie-bite"></i></h2>
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
export default Cookie;

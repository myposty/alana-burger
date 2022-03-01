import '../assets/css/Main.css';
import logo from '../assets/img/mr-burger.png';
function PageNotFound() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Pagina no encontrada</h2>
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
export default PageNotFound;

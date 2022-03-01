import '../assets/css/Main.css';
import logo from '../assets/img/mr-burger.png';
function Menu() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Nuestro menu</h2>
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
export default Menu;

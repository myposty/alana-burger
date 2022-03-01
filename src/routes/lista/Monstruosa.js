import '../../assets/css/Main.css';
import logo from '../../assets/img/mr-burger.png';
function Monstruosa() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Monstruosa</h2>
                <a
                    className="App-link"
                    href="/menu"
                >
                    Volver al menu
                </a>
            </header>
        </div>
    );
}
export default Monstruosa;

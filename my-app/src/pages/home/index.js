import Eli from './Eli2.png'
import './style.css'

function Home() {
    return (
        <main className="page">
            <img className="d-block mx-lg-auto img-fluid" src={Eli} alt='me'></img>
            <header id="centerAll">
                <section
                    className="container-fluid h-100 d-flex justify-content-center home animate__animated animate__fadeIn animate__slow">
                    <div className="d-flex h-100 text-center align-items-center main">
                    </div>
                </section>
            </header>
        </main>
    )
}

//display NAV on click//
function open() {
    const elements = document.querySelectorAll("li.hide");
    for (let element of elements) {
        element.classList.remove("hide");
        element.classList.toggle("transformed");
    }
}

//close NAV on click//
function close() {
    const elements = document.querySelectorAll("li.transformed");
    for (let element of elements) {
        element.classList.remove("transformed");
        element.classList.toggle("hide");
    }
}

//NAV function//
const clicker = (function () {
    var change = true;
    return function () {
        change ? open() : close();
        change = !change;
    }
})();



export default Home; 
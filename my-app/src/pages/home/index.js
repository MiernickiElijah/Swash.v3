import Eli from './Eli2.png'
import './style.css'

function Home() {
    return (
        <main className="page">

            <header id="centerAll"
                className="container-fluid h-100 d-flex justify-content-center home animate__animated animate__fadeIn animate__slow">
                <div className="d-flex h-100 text-center align-items-center main">
                </div>
            </header>

            <section className="aboutme row flex-lg-row-reverse align-items-center g-5 py-5">
                <article className="col-lg-6" id="bio">
                    <h1 id="aboutMeTitle">About Me</h1>
                    <p className="lead">
                        A certified full stack developer with over 12 years of people experience (customer service, sales, and account management) in addition to leadership roles. I have a strong entrepreneurial mind with a bachelor's in business management and a master's in science.
                        I am an adaptable individual with strong technical aptitude and problem solving skills fixated on learning and growing.
                        <ol>
                            - React
                            - Java Script
                            - HTML5 & CSS3
                            - MongoDB
                            - Express
                            - Node.js
                            - (PowerBI, Microsoft Dynamics, IMB - Cognos, Excel)
                        </ol>
                    </p>
                </article>
                <article className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-lg-auto img-fluid" src={Eli} alt='me'></img>
                </article>
            </section>
        </main >
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
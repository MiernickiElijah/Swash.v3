import Eli from './Eli2.png'
import './style.css'

function Home() {
    return (
        <main className="page container col-xxl-8 px-4 py-5">

            <section className="aboutme row flex-lg-row-reverse align-items-center g-5 py-5">
                <article className="col-lg-6" id="bio">
                    <h1 id="aboutMeTitle">Elijah M.J.O. Miernicki</h1>
                    <p className="lead">
                        A certified full stack developer with over 12 years of people experience (customer service, sales, and account management) in addition to leadership roles. I have a strong entrepreneurial mind with a bachelor's in business management and a master's in science.
                        I am an adaptable individual with strong technical aptitude and problem solving skills fixated on learning and growing.
                        <ul>
                            - React
                            - Java Script
                            - HTML5 & CSS3
                            - MongoDB
                            - Express
                            - Node.js
                            - (PowerBI, Microsoft Dynamics, Cognos, Excel)
                        </ul>
                    </p>
                </article>
                <article className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-lg-auto img-fluid" src={Eli} alt='me'></img>
                </article>
            </section>
        </main >
    )
}

export default Home; 
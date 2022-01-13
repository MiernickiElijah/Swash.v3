import Eli from './Eli2.png'
import './style.css'

function Home() {
    return (
        <main className="page container-fluid">

            <section className="aboutme row flex-lg-row-reverse align-items-center">
                <article className="intro col-lg-6" id="bio">
                    <h1 id="aboutMeTitle">Elijah M.J.O. Miernicki</h1>
                    <p className="lead">
                        A certified full stack developer with over 12 years of people experience (customer service, sales, and account management) in addition to leadership roles. I have a strong entrepreneurial mind with a bachelor's in business management and a master's in science.
                        I am an adaptable individual with strong technical aptitude and problem solving skills fixated on learning and growing.
                    </p>
                    <ol className='skillsList'>
                        <li>React</li>
                        <li>Java Script</li>
                        <li>HTML5 & CSS3</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Node.js</li>
                        <li>(PowerBI, Microsoft Dynamics, Cognos, Excel)</li>
                        <li video></li>
                    </ol>
                </article>
                <article className="col-lg-6">
                    <img className="lg-auto img-fluid" src={Eli} alt='me'></img>
                </article>
            </section>
        </main >
    )
}

export default Home; 
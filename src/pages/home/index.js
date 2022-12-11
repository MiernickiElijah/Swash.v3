import Eli from './Eli3.png'
import TypeScript from './typescript.png'
import dotNet from './dotNet.png'
import playwright from './playwright.png'
import jest from './jest.png'
import './style.css'
import * as FareactIcons from "react-icons/fa";
import * as IoreactIcons from "react-icons/io";
import * as SireactIcons from "react-icons/si";
import * as GrreactIcons from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Linker } from './linker';

function Home() {
    return (
        <main
            className="page container-fluid"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "1rem"
            }}
        >
            <section className="aboutme row flex-lg-row-reverse align-items-center">
                <article className="intro col-lg-6 align-items-center" id="bio">
                    <h1 className='animateText' href='#'>Elijah M.J.O. Miernicki</h1>
                    <p className="lead">
                        With over 12 years of experience in sales and account management, and a diverse educational background including a Bachelor's degree in business management from the University of Minnesota, a Master's degree in Exercise Science from Concordia St. Paul, and a Full Stack Development certification from the University of Minnesota, I am a skilled and qualified candidate for any software engineering role. My experience in sales and account management has equipped me with the communication and organizational skills necessary to excel in this field, and my educational background provides a strong foundation in both business and technology.
                    </p>
                    <ol className='skillsList'>
                        <li className='aL'><FareactIcons.FaVuejs className='skillIcon' />  Vue</li>
                        <li className='aL'><FareactIcons.FaReact className='skillIcon' />  React</li>
                        <li className='aL'><IoreactIcons.IoLogoJavascript className='skillIcon' />  Java Script</li>
                        <li className='aL'><img className='skillImg skillIcon' src={TypeScript} alt='TypeScript' />  TypeScript</li>
                        <li className='aL'><img className='skillImg skillIcon' src={dotNet} alt='dotNet' />  .Net</li>
                        <li className='aL'><img className='skillImg skillIcon' src={playwright} alt='dotNet' />  Playwright</li>
                        <li className='aL'><img className='skillImg skillIcon' src={jest} alt='dotNet' />  Jest</li>
                        <li className='aL'><FareactIcons.FaGitAlt className='skillIcon' />  Git</li>
                        <li className='aL'><FareactIcons.FaGithub className='skillIcon' />  GitHub</li>
                        <li className='aL'><FareactIcons.FaNpm className='skillIcon' />  NPM</li>
                        <li className='aL'><FareactIcons.FaCogs className='skillIcon' />  C#</li>
                        <li className='aL'><SireactIcons.SiMongodb className='skillIcon' />  MongoDB</li>
                        <li className='aL'><SireactIcons.SiExpress className='skillIcon' />  Express.js</li>
                        <li className='aL'><FareactIcons.FaNodeJs className='skillIcon' />  Node.js</li>
                        <li className='aL'><GrreactIcons.GrMysql className='skillIcon' />  MySQL</li>
                    </ol>

                    {Linker.map((page, index) => {
                        return (
                            <h3 key={index} className={page.className}>My
                                <Link to={page.path}>
                                    <span id='pageIcon'>{page.icon}</span>
                                    <span className='flex-wrap'>{page.title}</span>
                                </Link>
                            </h3>
                        )
                    })}

                </article>
                <article className="col-lg-6">
                    <img className="lg-auto img-fluid" src={Eli} alt='me'></img>
                </article>
            </section>
        </main >
    )
}

export default Home; 
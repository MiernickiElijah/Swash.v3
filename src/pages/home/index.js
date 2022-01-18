import Eli from './Eli2.png'
import './style.css'
import * as FareactIcons from "react-icons/fa";
import * as IoreactIcons from "react-icons/io";
import * as SireactIcons from "react-icons/si";
import * as GrreactIcons from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Linker } from './linker';

function Home() {
    return (
        <main className="page container-fluid">

            <section className="aboutme row flex-lg-row-reverse align-items-center">
                <article className="intro col-lg-6 align-items-center" id="bio">
                    <h1 className='animateText' href='#'>Elijah M.J.O. Miernicki</h1>
                    <p className="lead">
                        A certified full stack developer with over 12 years of people experience (customer service, sales, and account management) in addition to mutliple leadership roles. I have a strong entrepreneurial mind with a bachelor's in business management and a master's in exercise science.
                        I am an adaptable individual with a strong technical aptitude and problem solving skills passionate about learning and growing.
                    </p>
                    <ol className='skillsList'>
                        <li className='aL'><FareactIcons.FaReact className='skillIcon' />  React</li>
                        <li className='aL'><IoreactIcons.IoLogoJavascript className='skillIcon' />  Java Script</li>
                        <li className='aL'><SireactIcons.SiHtml5 className='skillIcon' />  HTML5 <SireactIcons.SiCss3 className='skillIcon' />  CSS3</li>
                        <li className='aL'><SireactIcons.SiMongodb className='skillIcon' />  MongoDB</li>
                        <li className='aL'><SireactIcons.SiExpress className='skillIcon' />  Express.js</li>
                        <li className='aL'><FareactIcons.FaNodeJs className='skillIcon' />  Node.js</li>
                        <li className='aL'><GrreactIcons.GrMysql className='skillIcon' />  MySQL</li>
                        <li className='aL'>(<SireactIcons.SiPowerbi className='skillIcon' />  PowerBI,<SireactIcons.SiDynamics365 className='skillIcon' />  Microsoft Dynamics, <FareactIcons.FaFileExcel className='skillIcon' />  Excel)</li>
                    </ol>

                    {Linker.map((page, index) => {
                        return (
                            <h3 key={index} className={page.className}>Check out my
                                <Link to={page.path}>
                                    <span id='pageIcon'>{page.icon}</span>
                                    <span>{page.title}</span>
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
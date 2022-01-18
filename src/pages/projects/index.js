/* eslint-disable jsx-a11y/anchor-has-content */
import './style.css'
import Aos from "aos";
import "aos/dist/aos.css"
import dice from './dice.jpg'
import magic from './magic.jpg'
import poggers from './poggers.jpg'
import focus from './focus.jpg'
import storm from './storm.jpg'
import newdle from './newdle.PNG'
import * as AireactIcons from "react-icons/ai";
import { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <main>
                {/* <!--PROJECTS--> */}
                <div className="page" data-page="3">
                    <section id="deck">
                        {/* <!--p1--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://poggers-pog.herokuapp.com/login" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Poggers</h1></a>
                                    <p className="lead">This application provides a helping tracking projects and that projects tasks or bugs that need to be completed. An excellent tool for every programmer. (HTML, CSS, JS, bootstrap, Moment/luxon, node.js, SQL, express, node-mailer, sequilize)
                                        <a href="https://github.com/MiernickiElijah/poggers" target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://poggers-pog.herokuapp.com/login" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={poggers} alt=""></img></a>
                                    <figcaption>Photo by Johannes Ludwig on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>

                        {/* <!--p2--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://born001.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={newdle} alt="newdle"></img>
                                    </a>
                                </div>
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://born001.herokuapp.com/" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Newdle</h1></a>
                                    <p className="lead">This is a voting application that allows users to create and vote on polls to help them make group decisions. Perfect for those indecisive people or a large opinionated group. (HTML, CSS, JS, Bulma, node.js, SQL, express, graphQL, react)<a href="https://github.com/MiernickiElijah/breakoutRoomNomads"
                                        target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                            </div>
                        </article>


                        {/* <!--p4--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://miernickielijah.github.io/Druid/" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Druid</h1></a>
                                    <p className="lead">This is a live weather dashboard with current and 5 day forecast based on US
                                        city. Type in your city and check out the weather on a clean UI with simple info.
                                        (HTML, CSS, HTML,
                                        jQuery, bootstrap, APIs) <a href="https://github.com/MiernickiElijah/Druid"
                                            target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/Druid/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={storm} alt="storm"></img>
                                    </a>
                                    <figcaption>photo by Johannes Plenio on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>


                        {/* <!--p3--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/Skulduggery/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={dice} alt="dice"></img>
                                    </a>
                                    <figcaption>photo by Alperen Yazgi on Unsplash</figcaption>
                                </div>
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://miernickielijah.github.io/Skulduggery/" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Skulduggery v.2</h1></a>
                                    <p className="lead">This is a random character generator for 5th edition Dungeons and
                                        Dragons. Get a turn key ready character on the fly, perfect for the unprepared game master.
                                        (HTML,
                                        APIs, CSS, vanilla
                                        JS, jQuery, Bulma framework) <a href="https://github.com/MiernickiElijah/Skulduggery"
                                            target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* <!--p6--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://miernickielijah.github.io/barbarian/" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Barbarian</h1></a>
                                    <p className="lead">This is a day scheduler that allows users to save written notes via time to
                                        their
                                        local computer and
                                        track the passing of time.(HTML, CSS, JS, bootstrap, Moment/luxon) <a
                                            href="https://github.com/MiernickiElijah/barbarian" target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/barbarian/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={focus} alt="storm"></img>
                                    </a>
                                    <figcaption>photo by Paul Skorupskas on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>

                        {/* <!--p5--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos='fade-left' className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://github.com/MiernickiElijah/Arcane" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={magic} alt="holding moon"></img>
                                    </a>
                                    <figcaption>photo by Jasper Benning on Unsplash</figcaption>
                                </div>
                                <div data-aos='fade-right' className="col-lg-6">
                                    <a className="projectHead"
                                        href="https://github.com/MiernickiElijah/Arcane" target="_blank" rel="noreferrer"><h1 className="display-5 fw-bold lh-1 mb-3 animateLink">Arcane(REPO)</h1></a>
                                    <p className="lead">This is a README.md generator using node.js. Allowing a user to create an entire
                                        professional README file via command line. Because who wants to type out an entire markdown every time?
                                        (Node.js, JS, jQuery, HTML, markdown)
                                    </p>
                                </div>
                            </div>
                        </article>

                    </section>
                </div>
                <footer id="footer">
                    <a className='aL' href="#top"><AireactIcons.AiOutlineRocket className='skillIcon' />Take me to the TOP!<AireactIcons.AiOutlineRocket className='skillIcon' /></a>
                </footer>
            </main>
        </>
    )
}

export default Projects;
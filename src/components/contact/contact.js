import React from 'react'
import './style.css';
import resume from './resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <section className='flex-container'>
            <div className='row'>
                <article className='contactColumn people card border-0'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>GITHUB</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FontAwesomeIcon className='icon profilepics card-image' id='cardIcon' icon={faGithub} alt='github' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="https://github.com/miernickielijah" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                        <strong>github.com/miernickielijah</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='contactColumn people card border-0'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>EMAIL</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FontAwesomeIcon className='icon profilepics card-image' id='cardIcon' icon={faInbox} alt='email' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>miernickielijah@gmail.com</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='contactColumn people card border-0'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>LINKEDIN</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FontAwesomeIcon className='icon profilepics card-image' id='cardIcon' icon={faLinkedin} alt='linkedin' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/miernickielijah/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} /><strong>linkedIn.com/in/miernickielijah</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='contactColumn people card border-0'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>RESUME</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FontAwesomeIcon class='icon profilepics card-image' id='cardIcon' icon={faFilePdf} alt='linkedin' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <a className="contactLink aL" href={resume} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faFilePdf} />
                                        Resume</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contact;
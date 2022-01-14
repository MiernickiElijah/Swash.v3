import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// import octocat from './GitHub-logo.jpg'
// import gmail from './gmail.png'
// import linkedin from './linkedin.png'
// import resume from './resume.png'

function Contact() {
    return (
        <div className="peopleContainer">
            <div className="columns is-mobile is-multiline is-centered is-vcentered" id="contactColumn">
                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>GITHUB</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={octocat} alt='github' />
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
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>EMAIL</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={gmail} alt='email' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>miernickielijah@gmail.com</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>LINKEDIN</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={linkedin} alt='linkedin' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/miernickielijah/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} /><strong>linkedIn.com/in/miernickielijah</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>LINKEDIN</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={linkedin} alt='linkedin' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href={resume} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faFilePdf} />
                                        Resume</a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
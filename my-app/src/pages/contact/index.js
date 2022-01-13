import resume from './resume.pdf'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <main className="page">

            <div className="d-flex flex-column flex-shrink-0 bg">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center" id="contactlist">

                    <a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>Miernickielijah@gmail.com</strong></a>

                    <a className="contactLink aL" href="https://github.com/MiernickiElijah" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                        <strong>github.com/MiernickiElijah</strong></a>

                    <a className="contactLink aL" href=" https://www.linkedin.com/in/miernickielijah/" target="_blank">
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        <strong>linkedIn.com/in/miernickielijah</strong></a>

                    <a className="contactLink aL" href=" tel:7634129985">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <strong>763-412-9985</strong></a>

                    <a className="contactLink aL" href={resume} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='icon' icon={faFilePdf} />
                        Resume</a>
                </ul>
            </div>

        </main >
    )
}

export default Contact;
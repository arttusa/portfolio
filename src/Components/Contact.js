import React from 'react';
import './ComponentStyles/Contact.css';
import Githublogo from './Media/Githublogo.png';
import Linkedinlogo from './Media/Linkedinlogo.png';
import MailLogo from './Media/mail.svg';


const Contact = () => {
    return (
        <>
            <div className="Contact" id="Contact">
                <div className="info">
                    Find out more about my projects in GitHub or contact me using email or LinkedIn.
                </div>
                <div className="Logos">
                    <a href="https://github.com/arttusa" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={Githublogo} alt="Github Logo" />
                    </a>
                    <a href="mailto:arttu@arasal.fi" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={MailLogo} alt="Mail Logo" />
                    </a>   
                    <a href="https://www.linkedin.com/in/arttu-salmij%C3%A4rvi-489b0a168/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={Linkedinlogo} alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;
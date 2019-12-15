import React from 'react';
import './ComponentStyles/Contact.css';
import Githublogo from './Media/Githublogo.png';
import Githublogo_hover from './Media/Githublogo_hover.png';
import Linkedinlogo from './Media/Linkedinlogo.png';


const Contact = () => {
    return (
        <>
            <div className="Contact" id="Contact">
                <div className="Logos">
                    <img className="Githublogo" src={Githublogo} alt="Github Logo" />
                    <img className="Linkedinlogo" src={Linkedinlogo} alt="LinkedIn Logo" />
                        
                </div>
            </div>
        </>
    )
}

export default Contact;
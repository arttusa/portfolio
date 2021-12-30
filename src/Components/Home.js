import React from 'react';
import './ComponentStyles/Home.css';
import Picture from './Media/Omakuva.jpg';
import Githublogo from './Media/Githublogo.png';
import Linkedinlogo from './Media/Linkedinlogo.png';
import MailLogo from './Media/mail.svg';

const Home = () => {
    return (
        <>
    
            <div className="Home" id="Home">
                <div style={{'display':'flex'}}>
                    <div className="Textbox">
                        <div className='TextHeader'>
                            Hello I'm <div className="Name"> Arttu Salmijärvi </div> 
                        </div>
                        <br /> 
                        <br /> 
                        <div className='Text'>
                            I'm a junior software engineer based in Vaasa
                            <br />
                            I study software engineering in the University of Turku
                        </div>
                    </div>
                    <img className="Picture" src={Picture} alt="Arttu" />
                </div>
  
            <div className="Logos">
                    <a href="https://github.com/arttusa" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={Githublogo} alt="Github Logo" />
                    </a>   
                    <a href="https://www.linkedin.com/in/arttu-salmij%C3%A4rvi-489b0a168/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={Linkedinlogo} alt="LinkedIn Logo" />
                    </a>
            </div>
            </div>
        </>
    )
}

export default Home;
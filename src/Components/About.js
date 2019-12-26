import React from 'react';
import './ComponentStyles/About.css';
import Picture from './Media/Omakuva.png';

const About = () => {
    return (
        <>
            <div className="About" id="About">
                <div className="Item1">
                    <div className="Headers"> Facts </div>
                    <div className="Texts"> 
                        21-year-old student living in Turku. <br></br>
                        I'm interested in developing and investing. <br></br>
                        
                    </div>
                    <div className="Headers"> Experience </div>
                    <div className="Texts"> 
                    Everyone has to start from somewhere. 
                    My <div className="Adjectives"> extreme motivation  </div> and <div className="Adjectives"> will to learn </div> compensates the lack of professional experience from the field.
                    </div>
                </div>
                <img className="Picture" src={Picture} alt="Arttu" />
                
            </div>
        </>
    )
}

export default About;
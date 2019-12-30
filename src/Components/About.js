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
                    In the last 1.5 years I have gone from zero knowledge of coding to building websites. 
                    My goal to year 2020 is to gain as much experience as possible from summer job.  
                    </div>
                </div>
                <img className="Picture" src={Picture} alt="Arttu" />
                
            </div>
        </>
    )
}

export default About;
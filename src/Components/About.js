import React from 'react';
import './ComponentStyles/About.css';

const About = () => {
    return (
        <>
            <div className="About" id="About">
                <div className="Item1">
                    <div className="Headers"> Facts </div>
                    <div className="Texts"> 
                        21-year-old second year student living in Turku. <br></br>
                        Interested in developing and investing. <br></br>
                    </div>
                </div>
                <div className="Item2">
                    <div className="Headers"> Experience </div>
                    <div className="Texts"> 
                    Everyone has to start from somewhere. 
                    My <div className="Adjectives"> extreme motivation  </div> and <div className="Adjectives"> will to learn </div> compensates the lack of professional experience from the field.
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default About;
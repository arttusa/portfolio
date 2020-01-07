import React from 'react';
import './ComponentStyles/About.css';
import Picture from './Media/Omakuva.png';

const About = () => {
    return (
        <>
            <div className="About" id="About">
                <div className="Item1">
                    <div className="Headers"> Some facts about me</div>
                    <div className="Texts"> 
                        <li> I'm 21-year-old student living in Turku </li>
                        <li> My biggest interests are developing and investing </li>
                        <li> In my own time I like to exercise and do my developing projects </li>
                        <li> Also a big fan of different tv-series and movies </li>
                        <li> I'm looking for first developer summer job </li>
                    </div>
                </div>
                <img className="Picture" src={Picture} alt="Arttu" />
                
            </div>
        </>
    )
}

export default About;
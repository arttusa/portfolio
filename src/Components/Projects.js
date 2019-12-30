import React from 'react';
import './ComponentStyles/Projects.css';
import Osakeseuranta from './Media/Osakeseuranta.png';
import PortfolioPic from './Media/Portfolio.png';
import Nodelogo from './Media/node.svg';
import AWSlogo from './Media/aws.svg';
import Reactlogo from './Media/react.svg';
import Firebaselogo from './Media/firebase.svg';

const Projects = () => {
    return (
        <>
            <div className="Projects" id="Projects">
                <div className="Boxes">
                    <div className="Box1"> 
                        <div className="Header"> OSAKESEURANTA </div>
                        <img className="PicOsakeseuranta" src={Osakeseuranta} alt="Osakeseuranta" />
                        <div className="Info"> Website for stock tracking. My first real fullstack project which combines my two hobbies developing and investing.
                        <a href="https://osakeseuranta.net" target="_blank" rel="noopener noreferrer"> osakeseuranta.net  </a> </div>
                        <div className="Icons1">  <div className="Logosheader"> Technologies </div>
                            <img className="Icon" src={Reactlogo} alt="React icon" />
                            <img className="Icon" src={Nodelogo} alt="Node icon" />
                            <img className="Icon" src={AWSlogo} alt="AWS icon" />
                        </div>
                    </div>
                    <div className="Box2"> 
                        <div className="Header"> PORTFOLIO </div>
                        <img className="PicOsakeseuranta" src={PortfolioPic} alt="Portfolio" /> 
                        <div className="Info"> Portfolio website for information about myself and my projects. In this project I concentrated in design and responsiveness. </div>
                        <div className="Icons2">  <div className="Logosheader"> Technologies </div>
                            <img className="Icon" src={Reactlogo} alt="React icon" />
                            <img className="Icon" src={Firebaselogo} alt="Firebase icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
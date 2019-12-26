import React from 'react';
import { Link } from 'react-scroll';
import './ComponentStyles/Navitab.css'


const Navitab = () => {
    return (
        <>  
        <div className="Nav">
            <label for="toggle"> &#9776; </label>
            <input type="checkbox" id="toggle" className="toggle" />
            <div className="Tab">
                <Link 
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                >
                    Home
                </Link>
                <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                >
                    About
                </Link>
                <Link 
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                >
                    Projects
                </Link>
                <Link 
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                >
                    Contact
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navitab;
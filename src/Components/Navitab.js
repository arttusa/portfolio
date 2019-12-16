import React from 'react';
import { Link } from 'react-scroll';
import './ComponentStyles/Navitab.css'


const Navitab = () => {

    return (
        <>
            <div className="Tab">
                <Link 
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                    Home
                </Link>
                <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                    About
                </Link>
                <Link 
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                    Projects
                </Link>
                <Link 
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                    Contact
                </Link>
            </div>
        </>
    )
}

export default Navitab;
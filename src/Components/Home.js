import React from 'react';
import './ComponentStyles/Home.css';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <>
            <div className="Home" id="Home">
                <div className="Text">
                    Hello, I'm <div className="Name"> Arttu Salmijärvi. </div> <br />  I study computer science at the University of Turku.
                </div>
                <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                >
                    <ArrowDown />
                </Link>
            </div>
        </>
    )
}

export default Home;
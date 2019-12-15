import React from 'react';
import './ComponentStyles/Home.css';

const Home = () => {
    return (
        <>
            <div className="Home" id="Home">
                <div className="Text">
                    Hello, I'm <div className="Name"> Arttu Salmijärvi. </div> <br />  I study computer science at Turku University.
                </div>
            </div>
        </>
    )
}

export default Home;
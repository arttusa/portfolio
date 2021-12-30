import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navitab from './Components/Navitab';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
    return (
        <>
            <div className="App">
                <div>
                    <Home />
                </div>
            </div>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));



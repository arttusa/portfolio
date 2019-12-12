import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './ComponentStyles/Navitab.css'


const Navitab = () => {
    return (
        <>
            <Router>
                <div className="Tab">
                    <Link to="/"> About </Link>
                    <Link to="/projects"> Projects </Link>
                </div>
                <div>
                    <Route exact path="/" component={About} />
                    <Route path="/projects" component={Projects} />
                </div>
            </Router>
        </>
    )
}

export default Navitab;
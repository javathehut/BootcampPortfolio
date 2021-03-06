import React, { Component } from 'react';
import Links from './Links.js';
import './App.css';
import Angel from '../public/angel.jpg';
import { Link } from 'react-router';


class About2 extends Component {
    render() {
        return (
            <div className="container">
                <Links />
                <div className="media">
                    <h2 className="text-center pageTitle">About Angel(ique)</h2>
                    <h4 className="text-center">"Static text content"</h4>
                    <Link to="/static/app"><img className="img-circle imageStyle" src={Angel} /></Link>
                    <div className="media-left">
                            <h5>Hey Girl</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default About2;
import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class Links extends Component {
    render() {
        return (
            <nav className="text-center">
                <ul className="margin">
                    <li className="listStyle"><Link to="/app">Main To Do Page</Link></li>
                    <li className="listStyle"><Link to="/about">About Page</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Links;
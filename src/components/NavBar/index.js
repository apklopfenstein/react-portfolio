import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="selected">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="selected">Contact Me</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" activeClassName="selected">Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
import React from 'react';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vShJKGLbII2QF-vPRVjq7SSb2VtA_pSXJ7k6hVJAK4PKBB6sCZaS1vn5SeQ09lGbkV9cityLOEu-7Ou/pub">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
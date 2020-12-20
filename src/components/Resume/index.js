import React from 'react';
import './Resume.css';

function Resume() {
    return(
        <>
        <div className="skills">
            <div className="front-end">
            <h1>Front End Proficiencies</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
            </ul>
            </div>
            <div className="back-end">
            <h1>Back End Proficiencies</h1>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>MongoDB</li>
            </ul>
            </div>
        </div>
        <a className="resume" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vShJKGLbII2QF-vPRVjq7SSb2VtA_pSXJ7k6hVJAK4PKBB6sCZaS1vn5SeQ09lGbkV9cityLOEu-7Ou/pub">My Resume</a>
        </>
    )
}

export default Resume;
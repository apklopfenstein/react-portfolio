import React from 'react';
import './Resume.css';
import Button from 'react-bootstrap/Button';

function Resume() {
    return (
        <section>
            <div className="skills">
                <div className="front-end">
                    <h2>Front End</h2>
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
                    <h2>Back End</h2>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL/Sequelize</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <Button className="resume" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vShJKGLbII2QF-vPRVjq7SSb2VtA_pSXJ7k6hVJAK4PKBB6sCZaS1vn5SeQ09lGbkV9cityLOEu-7Ou/pub">View My Resume</Button>
        </section>
    )
}

export default Resume;
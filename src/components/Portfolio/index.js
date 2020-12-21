import React from 'react';
import Project from '../Project';
import projects from './projects.json';

function Portfolio() {
    return(
        <section id="work">
            <h2>Portfolio</h2>

            <div className="projects">
                {projects.map(p => <Project key={ p.id } project={ p } />)}
            </div>
        </section>
    );
}

export default Portfolio;
import React from 'react';
import Project from '../Project';

function Portfolio() {
    return(
        <section id="work">
            <h2>Work</h2>

            <div class="projects">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    );
}

export default Portfolio;
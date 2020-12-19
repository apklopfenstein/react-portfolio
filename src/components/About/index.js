import React from 'react';
import './About.css';
import portrait from '../../images/profile.jpg';

function About() {
    return(
        <section id="about-me">
            <h2>About Me</h2>
            <div>
                <p>Hi, I'm Alyssa Klopfenstein! I'm currently a stay at home parent with 2 children who are are both about to be in school full time. I have a growing interest in web development and am hoping to use what I learn to reenter the work force. I'd also like to be able to co-create something with my husband.</p>
                <p>I currently live in Texas and have 2 dogs. I love to watch my kids and husband play hockey. We're also big Columbus Blue Jacket fans! My favorite vacations are to the beach and I love pop punk music. It's nice to meet you!</p>
            </div>
            <img src={portrait} alt="portrait" />
        </section>
    );
}

export default About;
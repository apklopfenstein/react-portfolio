import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return(
    <footer>
        <ul>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/apklopfenstein/"><FaGithub size="36px" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alyssa-klopfenstein-a85b231aa/"><FaLinkedin size="36px" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/aklopfenstein/"><FaInstagram size="36px" /></a></li>
        </ul>

        <h2 className="footer-text">Alyssa Klopfenstein &copy; 2020</h2>
    </footer>
    )
}

export default Footer;
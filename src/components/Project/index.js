import React from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
    return (
        <Card>
            <Card.Img variant="top" src={ project.img } />
            <Card.Body>
                <Card.Title>{ project.title }</Card.Title>
                <Card.Text>
                    { project.technology }
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={ project.githubUrl }>GitHub Repo</Card.Link>
                <Card.Link href={ project.deployUrl }>Deployed App</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;
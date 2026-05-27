import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <div data-aos="fade-down-left" data-aos-duration="1000"  className="cards">
      {projectsData.map((project) => (
        <Card style={{ width: '15rem' }} key={project.id}>
          <Card.Img variant="top" src={project.image} alt={project.title}/>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.shortDescription}</Card.Text>
            <Button 
              as={Link} 
              to={`/projects/${project.id}`} 
              variant="dark" 
              className="details-btn mt-auto"
            >
              More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { projectsData } from '../data/projectsData';

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <h2 style={{ textAlign: "center", padding: "100px" }}>Project not found</h2>;
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <Button as={Link} to="/projects" variant="outline-secondary" className="mb-4">
        ← Back to All Projects
      </Button>

      <Card>
        <Card.Img variant="top" src={project.image} style={{ height: "450px", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title style={{ fontSize: "2.2rem" }}>{project.title}</Card.Title>
          <Card.Text style={{ fontSize: "1.1rem" }}>
            {project.longDescription}
          </Card.Text>
          <p><strong>Tech Stack:</strong> {project.tech}</p>

          <div className="mt-4">
            <Button variant="primary" size="lg" className="me-3">
              View Live Demo
            </Button>
            <Button variant="dark" size="lg">
              View Source on GitHub
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectDetail;
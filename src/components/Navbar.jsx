import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavbarComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={({ isActive }) => `nav-custom-link ${isActive ? "active-link" : ""}`}
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              className={({ isActive }) => `nav-custom-link ${isActive ? "active-link" : ""}`}
            >
              About
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/projects" 
              className={({ isActive }) => `nav-custom-link ${isActive ? "active-link" : ""}`}
            >
              Projects
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className={({ isActive }) => `nav-custom-link ${isActive ? "active-link" : ""}`}
            >
              Contact
            </Nav.Link>
            
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                marginLeft: "15px",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "50%",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "rotate(30deg)"}
              onMouseLeave={(e) => e.target.style.transform = "rotate(0deg)"}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
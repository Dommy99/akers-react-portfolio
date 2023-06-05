import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Nav";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="nav">
        <Navbar.Brand>Dominique Akers</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Portfolio" className="linkText">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="linkText">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Resume" className="linkText">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className="linkText">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

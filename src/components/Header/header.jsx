import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Nav"
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (

<Navbar bg="dark" variant="dark" fixed="top" >
    <Container className="nav">
    <Navbar.Brand >Dominique Akers</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Portfolio"><Link to="/Portfolio" className="linkText">Portfolio</Link></Nav.Link>
      <Nav.Link href="#About"><Link to="/About" className="linkText">About</Link></Nav.Link>
      <Nav.Link href="#Resume"><Link to="/Resume" className="linkText">Resume</Link></Nav.Link>
      <Nav.Link href="#Contact"><Link to="/Contact" className="linkText">Contact</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;

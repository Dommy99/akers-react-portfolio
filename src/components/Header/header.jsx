import Nav from "react-bootstrap/Nav";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"> <Link to="/Portfolio">Portfolio</Link> </Nav.Link>
  </Nav.Item>

  <Nav.Item>
  <Nav.Link href="/home"> <Link to="/About">About</Link> </Nav.Link>
  </Nav.Item>

  <Nav.Item>
  <Nav.Link href="/home"> <Link to="/Contact">Contact</Link> </Nav.Link>
  </Nav.Item>
</Nav>
  );
};

export default Header;

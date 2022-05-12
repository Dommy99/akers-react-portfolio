import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"> <Link to="/Portfolio">Portfolio</Link> </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Resume</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}

export default Header
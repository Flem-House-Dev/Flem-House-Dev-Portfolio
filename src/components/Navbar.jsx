import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {

  return (
   <Navbar  expand='lg' className="m-lg-auto" collapseOnSelect >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav variant="pills" className="" defaultActiveKey={location.pathname}>
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about" eventKey="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/resume" eventKey="/resume">
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" eventKey="/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
  
  );
}

export default NavBar;

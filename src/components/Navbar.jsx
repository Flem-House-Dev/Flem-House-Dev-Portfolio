import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// export default function Navbar() {
//     return (
        // <nav className="navbar navbar-expand-lg">
        //     <ul className="nav nav-tabs">
        //         <li className="nav-item">
        //             <a href="#about">About</a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="#projects">Projects</a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="#contact">Contact</a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="#resume">Resume</a>
        //         </li>
        //     </ul>
        // </nav>
//     )
// }

import logo from "../images/icons/android-chrome-512x512.png";
import { Navbar, Nav } from "react-bootstrap";
import Container from "./Container";

const NavbarContent = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="penrose triangle logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-center"
          />
          {" Anthony Gress"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#businesscard">Business Card</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContent;

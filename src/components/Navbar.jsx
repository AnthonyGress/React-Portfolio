import logo from "../images/icons/android-chrome-512x512.png";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from "./Container";

const NavbarContent = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="w-100">
      <Container style={{ maxWidth: "95vw !important" }}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img
              alt="penrose triangle logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
            />
            {" Anthony Gress"}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/businesscard">
              <Nav.Link>Business Card</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /* <nav className="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            class="d-inline-block align-center"
            alt=""
          />
          {" Anthony Gress"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Services
            </a>
            <a className="nav-item nav-link" href="#">
              Testimonials
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
            <a className="nav-item nav-link" href="#">
              Business Card
            </a>
          </div>
        </div>
      </nav> */
  );
};

function Home() {
  return <h2>Home</h2>;
}

export default NavbarContent;

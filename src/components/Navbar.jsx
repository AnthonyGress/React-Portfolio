import logo from "../images/icons/android-chrome-512x512.png";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from "./Container";

const NavbarContent = (props) => {
  const blur = () => {
    // console.log("blur navbar");
  };
  // let isHome;N
  // let page = window.location.href.toString().split("/").pop();
  // if (page === "") {
  //   console.log("true");
  //   isHome = true;
  // } else {
  //   console.log("false");
  //   isHome = false;
  // }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="w-100 blur"
      style={props.style}
      onToggle={blur}
      fixed="top"
    >
      <Container style={{ maxWidth: "95vw !important" }}>
        <Navbar.Brand href="#">
          <img
            alt="penrose triangle logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block"
          />
          <span className="fs-5" style={{ color: "white" }}>
            {" Anthony Gress"}
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <LinkContainer exact={true} to="/">
              <Nav.Link className="fs-5">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/about">
              <Nav.Link className="fs-5">About</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/services">
              <Nav.Link className="fs-5">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/portfolio">
              <Nav.Link className="fs-5">Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/testimonials">
              <Nav.Link className="fs-5">Testimonials</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer exact={true} to="/mycard">
              <Nav.Link className="fs-5">My Card</Nav.Link>
            </LinkContainer> */}
            <LinkContainer exact={true} to="/resume">
              <Nav.Link className="fs-5">Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/contact">
              <Nav.Link className="fs-5">Contact</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer exact={true} to="/card">
              <Nav.Link className="fs-5">Business Card</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContent;

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
// import logo from "../images/icons/android-chrome-512x512.png";
import logo from "../images/logos/logo2.png";
import NavbarContent from "./Navbar";

function Hero() {
  return (
    <>
      <NavbarContent style={{ position: "absolute" }} />
      <section className="heroImg" id="home">
        <div className="container" style={{ maxWidth: "95vw" }}>
          <Row>
            <Col size="lg-12">
              <h1 className="display-4 fade-in1 mt-5">Hi, I'm Anthony</h1>
              <div className="fs-4 mt-5">
                I am a Full-Stack Web Developer, Tech Support Specialist, Repair
                Technician, and Fire Performer
              </div>
              <div className="fs-4 mt-5">
                I solve technical problems and teach people skills to make their
                lives easier
              </div>
            </Col>
          </Row>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#about" className="btn btn-primary btn-lg p-2 mt-4">
          Learn More
        </a>
      </section>
    </>
  );
}

export default Hero;

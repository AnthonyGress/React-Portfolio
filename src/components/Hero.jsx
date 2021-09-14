// import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
// import logo from "../images/icons/android-chrome-512x512.png";
import logo from "../images/logos/minified/logo.png";
import NavbarContent from "./Navbar";
import resetScroll from "./resetScroll";
import Button from "@restart/ui/esm/Button";
import { scroller } from "react-scroll";

function Hero() {
  const scrollToItem = (item) => {
    const isMobile = window.outerWidth < 968;
    let offsetVal;
    isMobile ? (offsetVal = -84) : (offsetVal = -60);
    scroller.scrollTo(item, {
      offset: offsetVal,
      smooth: true,
      duration: 175,
      delay: 0,
    });
    // console.log(isMobile);
  };

  resetScroll();
  return (
    <>
      {/* <NavbarContent style={{ position: "absolute" }} /> */}
      <NavbarContent />
      <section className="heroImg" id="home">
        <div className="container" style={{ maxWidth: "95vw" }}>
          <Row>
            <Col size="lg-12">
              <h1 className="display-4 fade-in mt-5">Hi, I'm Anthony</h1>
              <div className="fs-4 mt-5 fade-in-delay">
                I am a Full-Stack Web Developer, Tech Support Specialist, Repair
                Technician, and Fire Performer
              </div>
              <div className="fs-4 mt-5 fade-in-delay2">
                I provide innovative, technical solutions and design
                websites/apps
              </div>
            </Col>
          </Row>
        </div>
        <div className="fade-in">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Button
          className="btn btn-primary btn-lg p-2 mt-4 fade-in-delay2"
          onClick={() => scrollToItem("about")}
        >
          Learn More
        </Button>
      </section>
    </>
  );
}

export default Hero;

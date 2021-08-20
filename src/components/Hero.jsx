import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

function Hero() {
  return (
    <section className="hero" id="home">
      <Container>
        <Row>
          <Col size="lg-12">
            <h1 className="display-4 fade-in1">Hi, I'm Anthony</h1>
            <div className="fs-4">
              I am a Full-Stack Web Developer, Tech Support Specialist, Repair
              Technician, and Fire Performer
            </div>
            <div className="fs-4">
              I solve technical problems and teach people skills to make their
              lives easier
            </div>
            <a href="#about" className="btn btn-primary btn-lg p-2 mt-5">
              Learn More
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

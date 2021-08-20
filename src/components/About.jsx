import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import picture from "../images/chair.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="fs-1 text-center">About Me</div>
      <Container>
        <Row>
          <Col size="lg-6">
            <div className="w-50">
              <img
                src={picture}
                className="img-fluid"
                alt="anthony sitting in chair"
              />
            </div>
          </Col>
          <Col size="lg-6">
            <p className="about-content">
              I have always had a passion for technology. Throughout my life, I
              have been constantly tinkering with, building, and fixing
              electronics. I studied Computer Science at the University of
              Central Florida and have used those skills to solve problems and
              fix electronics for thousands of people. For the last year I have
              been providing tech support for 300 Verizon Wireless customers a
              month. Additionally, I resolved over 85% of their issues that I
              came into contact with. I obtained my A+ Certification from
              CompTIA in 2020 and I am continuously growing and furthering my
              education. As this is a rapidly evolving field, I strive to
              acquire the latest information pertaining to technology. I have
              studied network tools/infrastructure, web development, and
              cybersecurity. I actually built this website from the ground up
              using HTML, CSS, and Javascript. Check out my portfolio to see
              other projects that I have been working on lately!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

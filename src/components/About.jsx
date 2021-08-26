import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import picture from "../images/minified/ChairLandscape.jpg";

const About = () => {
  return (
    <section id="about" className="pb-4">
      <div className="heading">About Me</div>
      <Container>
        <Row>
          <Col size="col-lg-6 aboutWrapper">
            <img
              src={picture}
              className="img-fluid"
              alt="anthony sitting in chair"
            />
          </Col>
          <Col size="col-lg-6 aboutWrapper">
            <p className="about-content fs-4">
              I have always been passionate about technology. As a child, you
              could usually find me tinkering, building, and fixing things. I
              went on to study Computer Science at the University of Central
              Florida and since then, I have applied those skills and solved
              problems for thousands of people. I obtained my A+ Certification
              from CompTIA in 2020 and in 2021 I completed the software
              developer boot camp from the University of Central Florida as
              well. As this is a rapidly evolving field, I strive to acquire the
              latest information pertaining to technology; therefore I am
              continuously growing and furthering my education. I have
              vigorously studied software development, network
              tools/infrastructure, and cybersecurity. I actually built this
              website from the ground up using React JS. Check out my portfolio
              to see other projects that I have been working on lately!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

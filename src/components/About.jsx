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
            <p className="about-content fs-5">
              I have always been passionate about technology. As a child, you
              could find me tinkering, building, and fixing things. I studied
              Computer Science at the University of Central Florida and I
              obtained the A+ Certification from CompTIA. Most recently, I
              recieved the Full Stack Software Developer Certification from the
              University of Central Florida. The field of technology is rapidly
              evolving and I strive to acquire the latest information,
              continuously furthering my education. In addition to software
              development and tech support, I have studied cybersecurity,
              network tools, operating systems, and network infrastructure.
            </p>
            <p className="about-content-p fs-5">
              In my previous role as Verizon Tech Support Agent, I implemented
              innovative, technical solutions for thousands of people. Over
              eighty five percent of the issues that I came across were
              resolved, all within an average time frame of ten minutes. I have
              a passion for learning, creating, and problem solving that is
              present in all of my work. Using code as my medium, I want to help
              you build your dream project. I built this website from the ground
              up using the React library for JavaScript, which allows all the
              parts of the page to be modular, self-sufficient, and most
              importantly fast. Check out my portfolio to see some of my work!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

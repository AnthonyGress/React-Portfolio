import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

const Services = () => {
  return (
    <section id="services">
      <h1 className="fs-1 text-center">Services</h1>
      <div className="service1"></div>
      <Container>
        <Row>
          <Col size="col-md-6">
            <h2 className="row-services-heading">Tech Support</h2>
            <h5 className="subheading">
              I provide solutions for tech issues at home and in the office
            </h5>
          </Col>
          <Col size="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                Tech support for iPhone/iPad, Androids, and computers
              </li>
              <li className="list-group-item">
                Website development and maintenance
              </li>
              <li className="list-group-item">
                In-person and remote tech support
              </li>
              <li className="list-group-item">
                Diagnose and repair software issues
              </li>
              <li className="list-group-item">
                Maintain network devices & office equipment
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="service2"></div>
      <Container>
        <Row>
          <Col size="col-md-6">
            <h2 className="row-services-heading">Device Repair</h2>
            <h5 className="subheading">If you can break it, I can fix it</h5>
          </Col>
          <Col size="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                Repair PC and laptop screens, hard drives, RAM
              </li>
              <li className="list-group-item">
                Data Recovery and Data transfer
              </li>
              <li className="list-group-item">
                Upgrade computers with new Hard drive/SSD, RAM, Processors
              </li>
              <li className="list-group-item">
                iPad, iPhone, and cell phone repairs
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="service3"></div>
      <Container>
        <Row>
          <Col size="col-md-6">
            <h2 className="row-services-heading">Software Development</h2>
            <h5 className="subheading">I design and build applications</h5>
          </Col>
          <Col size="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                Repair PC and laptop screens, hard drives, RAM
              </li>
              <li className="list-group-item">
                Data Recovery and Data transfer
              </li>
              <li className="list-group-item">
                Upgrade computers with new Hard drive/SSD, RAM, Processors
              </li>
              <li className="list-group-item">
                iPad, iPhone, and cell phone repairs
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

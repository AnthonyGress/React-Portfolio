import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

const Services = () => {
  return (
    <section id="services">
      <h1 className="heading">Services</h1>
      <div className="service3"></div>
      <Container>
        <Row>
          <Col size="col-md-6 service-heading">
            <div>
              <h2>Software Development</h2>
              <h5 className="subheading">
                I bring your business's vision to life through the design of
                software, websites and apps
              </h5>
            </div>
          </Col>
          <Col size="col-md-6 service-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                Create unique and engaging apps/websites
              </li>
              <li className="list-group-item">
                Design clean, simple, and intuitive user interfaces
              </li>
              <li className="list-group-item">
                Build backend servers, databases, data relationships
              </li>
              <li className="list-group-item">
                Sort, organize, filter and distribute information
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="service1"></div>
      <Container>
        <Row>
          <Col size="col-md-6 service-heading">
            <div>
              <h2>Tech Support</h2>
              <h5 className="subheading">
                I provide solutions for technology issues at home or in the
                office
              </h5>
            </div>
          </Col>
          <Col size="col-md-6 service-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                Provide in-person and remote tech support
              </li>
              <li className="list-group-item">
                Supported devices include laptops, phones, tablets printers, and
                desktop computers
              </li>
              <li className="list-group-item">
                Diagnose and repair hardware/software issues
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
          <Col size="col-md-6 service-heading">
            <div>
              <h2>Device Repair</h2>
              <h5 className="subheading">If you can break it, I can fix it</h5>
            </div>
          </Col>
          <Col size="col-md-6 service-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                Repair desktop computers, laptops, and mobile devices
              </li>
              <li className="list-group-item">
                Recover or transfer documents, pictures, files etc
              </li>
              <li className="list-group-item">
                Upgrade components i.e hard drives/SSD, RAM, processors
              </li>
              <li className="list-group-item">
                Optimize device performance and reformat hard drives
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

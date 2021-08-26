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
                I provide solutions for tech issues at home and in the office
              </h5>
            </div>
          </Col>
          <Col size="col-md-6 service-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                In-person and remote tech support available
              </li>
              <li className="list-group-item">
                Support for many devices Laptops, iPhone/iPad, Androids, and PCs
              </li>
              <li className="list-group-item">
                Website troubleshooting and maintenance
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
          <Col size="col-md-6 service-heading">
            <div>
              <h2>Device Repair</h2>
              <h5 className="subheading">If you can break it, I can fix it</h5>
            </div>
          </Col>
          <Col size="col-md-6 service-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                Repair PC and laptop screens, hard drives, RAM
              </li>
              <li className="list-group-item">
                Data Recovery and Data transfer
              </li>
              <li className="list-group-item">
                Upgrade PCs/Laptops components i.e Hard disks/SSD, RAM,
                Processors
              </li>
              <li className="list-group-item">
                Mobile phone and tablet repairs
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

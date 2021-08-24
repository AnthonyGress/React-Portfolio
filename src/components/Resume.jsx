import Carousel from "./Carousel";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

const Resume = () => {
  return (
    <section>
      <h1 className="heading">Resume</h1>
      <Container>
        <Row>
          <Col size="md-6">
            <div className="card h-100">
              <h5 className="card-header text-center fs-3">Download Link</h5>
              <div className="card-body justify-content-center d-flex align-content-center">
                <a
                  href="files/Resume.pdf"
                  download="AnthonyGress-Resume"
                  target="_blank"
                >
                  <button className="btn btn-primary fs-5">Download</button>
                </a>
              </div>
              <div className="card-footer d-flex justify-content-end"></div>
            </div>
          </Col>
        </Row>
      </Container>

      <Carousel />
    </section>
  );
};

export default Resume;

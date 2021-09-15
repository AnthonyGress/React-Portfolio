import Carousel from "./Carousel";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import resume from "../images/resume.pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Resume = () => {
  let width;
  window.outerWidth < 800 ? (width = 400) : (width = 900);

  return (
    <section id="resume" className="pb-5">
      <h1 className="heading">Resume</h1>
      <div className="d-flex justify-content-center mb-5">
        <Document file={resume} options={{ workerSrc: "/pdf.worker.js" }}>
          <Page pageNumber={1} width={width} />
        </Document>
      </div>
      <Container>
        <Row>
          <Col size="col-md-8">
            <div className="card h-100">
              <h5 className="card-header text-center fs-3">Download Link</h5>
              <div className="card-body justify-content-center d-flex align-content-center">
                <a
                  href={resume}
                  download="AnthonyGress-Resume"
                  target="_blank"
                  rel="noreferrer"
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

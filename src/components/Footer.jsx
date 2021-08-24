import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import github from "../images/github.png";
import stackoverflow from "../images/stackoverflow.png";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row class="align-items-center">
          <Col size="col-6 fs-5">{"Anthony Gress 2021 ©"}</Col>
          <Col size="col-6 text-end fs-5">
            <div className="d-flex justify-content-around">
              <a
                href="https://github.com/techx-guy"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-wrapper"
              >
                <span>
                  <img src={github} alt="github logo" className="footer-icon" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-gress/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-wrapper"
              >
                <span>
                  <img
                    src={linkedin}
                    alt="linked logo"
                    className="footer-icon"
                  />
                </span>
              </a>
              <a
                href="https://stackoverflow.com/users/15932911/techxguy"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-wrapper"
              >
                <span>
                  <img
                    src={stackoverflow}
                    alt="stackoverflow logo"
                    className="footer-icon stackoverflow"
                  />
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import Carousel from "react-bootstrap/Carousel";
import mac from "../images/carousel/macos-dark.png";
import windows from "../images/carousel/windows.png";
import linux from "../images/carousel/linux-dark.png";

const CarouselPage = () => {
  return (
    <section id="carousel">
      <h1 className="fs-1 text-center">Proficiencies</h1>
      <Carousel>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            <img
              src={mac}
              className="img-fluid slider-image"
              draggable="false"
              id="macos-img"
              alt="macos"
              loading="lazy"
            />
            <img
              src={linux}
              className="img-fluid slider-image"
              draggable="false"
              id="linux-img"
              alt="linux"
              loading="lazy"
            />
            <img
              src={windows}
              className="img-fluid slider-image"
              draggable="false"
              alt="windows 10"
              loading="lazy"
            />
          </div>
          {/* 
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            <img
              src={mac}
              className="img-fluid slider-image"
              draggable="false"
              id="macos-img"
              alt="macos"
              loading="lazy"
            />
            <img
              src={linux}
              className="img-fluid slider-image"
              draggable="false"
              id="linux-img"
              alt="linux"
              loading="lazy"
            />
            <img
              src={windows}
              className="img-fluid slider-image"
              draggable="false"
              alt="windows 10"
              loading="lazy"
            />
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            <img
              src={mac}
              className="img-fluid slider-image"
              draggable="false"
              id="macos-img"
              alt="macos"
              loading="lazy"
            />
            <img
              src={linux}
              className="img-fluid slider-image"
              draggable="false"
              id="linux-img"
              alt="linux"
              loading="lazy"
            />
            <img
              src={windows}
              className="img-fluid slider-image"
              draggable="false"
              alt="windows 10"
              loading="lazy"
            />
          </div>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselPage;

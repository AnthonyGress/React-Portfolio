import Carousel from "react-bootstrap/Carousel";
import CarouselSlide from "./CarouselSlide";
import mac from "../images/carousel/macos-dark.png";
import windows from "../images/carousel/windows.png";
import linux from "../images/carousel/linux-dark.png";

const skill1 = {
  name: "macos",
  image: mac,
};
const skill2 = {
  name: "windows",
  image: windows,
};
const skill3 = {
  name: "linux",
  image: linux,
};
const skills = [skill1, skill2, skill3];
const CarouselPage = () => {
  return (
    <section id="carousel">
      <h1 className="fs-1 text-center">Proficiencies</h1>
      <Carousel pause="false">
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {skills.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
          {/* 
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {skills.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {skills.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselPage;

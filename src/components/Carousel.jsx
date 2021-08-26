import Carousel from "react-bootstrap/Carousel";
import CarouselSlide from "./CarouselSlide";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
} from "./CarouselContent";

const CarouselPage = () => {
  return (
    <section id="carousel" className="pb-5">
      <h1 className="heading">Proficiencies</h1>
      <Carousel>
        <Carousel.Item>
          <div className="carousel">
            {slide1.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
          {/* 
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            {slide2.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            {slide3.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            {slide4.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            {slide5.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            {slide6.map((skill) => (
              <CarouselSlide
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselPage;

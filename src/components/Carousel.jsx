import Carousel from "react-bootstrap/Carousel";
import CarouselSlide from "./CarouselSlide";
import mac from "../images/carousel/macos-dark.png";
import windows from "../images/carousel/windows.png";
import linux from "../images/carousel/linux-dark.png";
import react from "../images/carousel/react.png";
import nodejs from "../images/carousel/nodejs.png";
import mysql from "../images/carousel/mysql.png";
import mongodb from "../images/carousel/mongodblogo.png";
import bootstrap from "../images/carousel/bootstrap.svg";
import graphql from "../images/carousel/graphql.png";
import handlebars from "../images/carousel/handlebars.png";
import webpack from "../images/carousel/webpack.png";
import npm from "../images/carousel/npm.png";
import html from "../images/carousel/html-dark.png";
import css from "../images/carousel/css-dark.png";
import js from "../images/carousel/js-dark.png";
import ios from "../images/carousel/ios.png";
import ipados from "../images/carousel/ipados.png";
import android from "../images/carousel/android.png";
import threejs from "../images/carousel/threejslogo.png";
import reactrouter from "../images/carousel/reactrouter.png";
import apollo from "../images/carousel/apollo.png";

const slide1 = [
  {
    id: 1,
    name: "react",
    image: react,
  },
  {
    id: 2,
    name: "nodejs",
    image: nodejs,
  },
  {
    id: 3,
    name: "reactrouter",
    image: reactrouter,
  },
  {
    id: 4,
    name: "graphql",
    image: graphql,
  },
];

const slide2 = [
  {
    id: 5,
    name: "threejs",
    image: threejs,
  },
  {
    id: 7,

    name: "mongodb",
    image: mongodb,
  },
  {
    id: 9,
    name: "mysql",
    image: mysql,
  },
  {
    id: 10,
    name: "handlebars",
    image: handlebars,
  },
];
const slide5 = [
  {
    id: 12,
    name: "macos",
    image: mac,
  },
  {
    id: 13,
    name: "windows",
    image: windows,
  },
  {
    id: 14,
    name: "linux",
    image: linux,
  },
];
const slide4 = [
  {
    id: 11,
    name: "webpack",
    image: webpack,
  },
  {
    id: 15,
    name: "html",
    image: html,
  },
  {
    id: 16,
    name: "css",
    image: css,
  },
  {
    id: 17,
    name: "js",
    image: js,
  },
];
const slide6 = [
  {
    id: 19,
    name: "ios",
    image: ios,
  },
  {
    id: 20,
    name: "ipados",
    image: ipados,
  },
  {
    id: 21,
    name: "android",
    image: android,
  },
];
const slide3 = [
  {
    id: 8,

    name: "apollo",
    image: apollo,
  },
  {
    id: 6,

    name: "npm",
    image: npm,
  },
  {
    id: 18,
    name: "bootstrap",
    image: bootstrap,
  },
];
const CarouselPage = () => {
  return (
    <section id="carousel" className="pb-5">
      <h1 className="heading">Proficiencies</h1>
      <Carousel>
        <Carousel.Item>
          <div className="carousel justify-content-evenly">
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
          <div className="carousel d-flex justify-content-evenly">
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
          <div className="carousel d-flex justify-content-evenly">
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
          <div className="carousel d-flex justify-content-evenly">
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
          <div className="carousel d-flex justify-content-evenly">
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
          <div className="carousel d-flex justify-content-evenly">
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

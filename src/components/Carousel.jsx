import Carousel from "react-bootstrap/Carousel";
import CarouselSlide from "./CarouselSlide";
import mac from "../images/carousel/macos-dark.png";
import windows from "../images/carousel/windows.png";
import linux from "../images/carousel/linux-dark.png";
import react from "../images/carousel/react.png";
import nodejs from "../images/carousel/nodejs.png";
import mysql from "../images/carousel/mysql.png";
import mongodb from "../images/carousel/mongodb.png";
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

const slide1 = [
  {
    name: "react",
    image: react,
  },
  {
    name: "nodejs",
    image: nodejs,
  },
  {
    name: "mongodb",
    image: mongodb,
  },
  {
    name: "graphql",
    image: graphql,
  },
];

const slide2 = [
  {
    name: "threejs",
    image: threejs,
  },
  {
    name: "handlebars",
    image: handlebars,
  },
  {
    name: "npm",
    image: npm,
  },
  {
    name: "mysql",
    image: mysql,
  },
];
const slide4 = [
  {
    name: "webpack",
    image: webpack,
  },
  {
    name: "macos",
    image: mac,
  },
  {
    name: "windows",
    image: windows,
  },
  {
    name: "linux",
    image: linux,
  },
];
const slide3 = [
  {
    name: "html",
    image: html,
  },
  {
    name: "css",
    image: css,
  },
  {
    name: "js",
    image: js,
  },
  {
    name: "bootstrap",
    image: bootstrap,
  },
];
const slide5 = [
  {
    name: "ios",
    image: ios,
  },
  {
    name: "ipados",
    image: ipados,
  },
  {
    name: "android",
    image: android,
  },
];
const CarouselPage = () => {
  return (
    <section id="carousel" className="pb-2">
      <h1 className="heading">Proficiencies</h1>
      <Carousel>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {slide1.map((skill) => (
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
            {slide2.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {slide3.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {slide4.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel d-flex justify-content-evenly">
            {slide5.map((skill) => (
              <CarouselSlide name={skill.name} image={skill.image} />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselPage;

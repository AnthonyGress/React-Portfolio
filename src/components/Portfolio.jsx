import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import stargateImg from "../images/projects/stargate.jpeg";
import blogImg from "../images/projects/TechBlog.png";
import tastyImg from "../images/projects/TastyOg.png";
import budgetImg from "../images/projects/BudgetTracker.png";
import passwordImg from "../images/projects/password.png";
import freshBytesImg from "../images/projects/minified/freshBytesImg.png";
// import fitnessImg from "../images/projects/fitness.png";

const project1 = {
  heading: "Stargate App",
  description:
    "A full stack progressive web app (PWA) written in JS using three.js to create a fun and interactive way to explore the solar system!",
  image: stargateImg,
  url: "https://stargate-app.herokuapp.com/",
  github: "https://github.com/techx-guy/Stargate-App",
  index: 1,
};

const project2 = {
  heading: "Tech Blog App",
  description:
    "A full stack app written in Javascript using Node.js, Express.Js, Handlebars.Js and a MySQL database which securely stores encrypted user passwords. This app allows user login, create/comment/post to an online forum.",
  image: blogImg,
  url: "https://powerful-ravine-36007.herokuapp.com/",
  github: "https://github.com/techx-guy/Tech-Blog",
  index: 2,
};

const project6 = {
  heading: "Tasty Bytes App",
  description:
    "A web app that helps you find food and cocktail recipes using ingredients that you already have!",
  image: tastyImg,
  url: "https://techx-guy.github.io/TastyBytes/",
  github: "https://github.com/techx-guy/TastyBytes",
  index: 3,
};

const project4 = {
  heading: "Budget Tracker",
  description:
    "A full stack progressive web app that allows users to add expenses and deposits to their budget both online/offline.",
  image: budgetImg,
  url: "https://immense-thicket-58645.herokuapp.com/",
  github: "https://github.com/techx-guy/Budget-Tracker",
  index: 4,
};

const project5 = {
  heading: "Password Generator",
  description:
    "This is a secure password generator written with HTML/CSS/JS that will generate a unique, secure password with the click of a button.",
  image: passwordImg,
  url: "https://techx-guy.github.io/Password-Generator/",
  github: "https://github.com/techx-guy/Password-Generator",
  index: 5,
};

const project3 = {
  heading: "Fresh Bytes",
  description:
    "A full stack MERN app which showcases a modern restaraunt  serving delicious craft cocktails, local beers, and daily entree specials. All with an exquisite dining atmosphere",
  image: freshBytesImg,
  url: "https://freshbyteskitchen.herokuapp.com/",
  github: "https://github.com/techx-guy/Fresh-Bytes",
  index: 6,
};

const projects = [project1, project3, project2, project4, project5, project6];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="heading">Portfolio</h1>

      <Container>
        <Row>
          {projects.map((project) => (
            <Col size="col-md-6 mb-4" key={project.index}>
              <Card
                heading={project.heading}
                image={project.image}
                description={project.description}
                url={project.url}
                github={project.github}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

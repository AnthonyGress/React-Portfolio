import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import stargateImg from '../images/projects/minified/stargatescreenshot.jpg';
import blogImg from '../images/projects/minified/TechBlog.jpg';
import tastyImg from '../images/projects/minified/TastyOg.png';
import dancingLines from '../images/projects/minified/DancingLines.jpg';
import passwordImg from '../images/projects/minified/password.png';
import freshBytesImg from '../images/projects/minified/FBK.jpg';
import phoenixSite from '../images/projects/minified/phoenixSite.jpg';

const project1 = {
    heading: 'Stargate',
    description: 'Explore the final frontier from anywhere using any device with Stargate. A full stack MEHN (MySQL, Express, Handlebars, Node) progressive web app written in JavaScript using the Model-View-Controller paradigm. Three.js allows for the creation and manipulation of 3D objects using JavaScript.',
    image: stargateImg,
    url: 'https://stargate-app.herokuapp.com/',
    github: 'https://github.com/AnthonyGress/Stargate-App',
    index: 1
};

const project6 = {
    heading: 'Tech Blog',
    description: 'A full stack MEHN app written in JavaScript using Node.js, Express.Js, Handlebars.Js and a MySQL database which securely stores encrypted user passwords. This app allows users to login, create, comment, and post to an online forum.',
    image: blogImg,
    url: 'https://powerful-ravine-36007.herokuapp.com/',
    github: 'https://github.com/AnthonyGress/Tech-Blog',
    index: 2
};

const project5 = {
    heading: 'Tasty Bytes App',
    description: 'A web app that helps you find food and cocktail recipes using ingredients that you already have at home.',
    image: tastyImg,
    url: 'https://AnthonyGress.github.io/TastyBytes/',
    github: 'https://github.com/AnthonyGress/TastyBytes',
    index: 3
};

const project3 = {
    heading: 'Dancing Lines Art',
    description: "A commissioned website, built in React with JavaScript, designed to showcase unique and beatiful works of art. Features a clean theme with a comprehensive gallery of the artist's work. Utilizes EmailJS to contact the artist directly, through her website.",
    image: dancingLines,
    url: 'https://www.dancinglinesart.com/',
    github: '',
    index: 4
};

const project4 = {
    heading: 'Password Generator',
    description: 'This is a secure password generator written with HTML/CSS/JavaScript that will generate a unique, secure password with the click of a button.',
    image: passwordImg,
    url: 'https://AnthonyGress.github.io/Password-Generator/',
    github: 'https://github.com/AnthonyGress/Password-Generator',
    index: 5
};

const project2 = {
    heading: 'Fresh Bytes',
    description: "Serving delicious craft cocktails, local beers, and daily entree specials at Fresh Bytes. This full stack MERNQ (MongoDB, Express, React, Node, GraphQL) e-commerce store serves as this modern restaraunt's website, app, and even point of sale system.",
    image: freshBytesImg,
    url: 'https://freshbyteskitchen.herokuapp.com/',
    github: 'https://github.com/AnthonyGress/Fresh-Bytes',
    index: 6
};
const project7 = {
    heading: 'Phoenix Fire',
    description: 'At Phoenix Fire, we strive to maintain the highest levels of artistry and professionalism in our field. Since our founding in 2015, our performers have lit up a diverse range of events including private parties, weddings, business celebrations, art galas and more. We have diverse movement backgrounds and years of experience as professional entertainers. Our mission is to bring contemporary fire dancing to our communities through performance, collaboration, and education.',
    image: phoenixSite,
    url: 'https://phoenixfireflow.com/',
    github: '',
    index: 7
};

const projects = [project7, project1, project3, project2, project4, project5, project6];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h1 className='heading'>Portfolio</h1>

            <Container>
                <Row>
                    {projects.map((project) => (
                        <Col size='col-md-6 mb-4' key={project.index}>
                            <Card heading={project.heading} image={project.image} description={project.description} url={project.url} github={project.github} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;

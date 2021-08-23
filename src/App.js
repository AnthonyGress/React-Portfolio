import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";
import NavbarContent from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarContent />
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Carousel /> */}
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Switch>
          <Route exact="true" path="/">
            <Hero />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          {/* <Route path="#contact">
          <Contact />
        </Route> */}
          {/* <Route path="#businesscard">
          <BusinessCard />
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

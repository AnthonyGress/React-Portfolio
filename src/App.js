import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import BusinessCard from "./components/BusinessCard";
import NavbarContent from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <Hero />
            <About />
            <Carousel />
            <Portfolio />
          </Route>
          <Route exact={true} path="/about">
            <NavbarContent />
            <About />
          </Route>
          <Route exact={true} path="/services">
            <NavbarContent />
            <Services />
          </Route>
          <Route exact={true} path="/portfolio">
            <NavbarContent />
            <Portfolio />
          </Route>
          <Route exact={true} path="/testimonials">
            <NavbarContent />
            <Testimonials />
          </Route>
          <Route exact={true} path="/resume">
            <NavbarContent />
            <Resume />
          </Route>
          <Route exact={true} path="/contact">
            <NavbarContent />
            <Contact />
          </Route>
          {/* <Route exact={true} path="/mycard">
            <BusinessCard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

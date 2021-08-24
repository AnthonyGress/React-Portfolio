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
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <Hero />
            <About />
            <Carousel />
            <Portfolio />
          </Route>
          <Route path="/about">
            <NavbarContent />
            <About />
          </Route>
          <Route path="/services">
            <NavbarContent />
            <Services />
          </Route>
          <Route path="/portfolio">
            <NavbarContent />
            <Portfolio />
          </Route>
          <Route path="/testimonials">
            <NavbarContent />
            <Testimonials />
          </Route>
          <Route path="/resume">
            <NavbarContent />
            <Resume />
          </Route>
          <Route path="/contact">
            <NavbarContent />
            <Contact />
          </Route>
          {/* <Route path="/mycard">
            <BusinessCard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

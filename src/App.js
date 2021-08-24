import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
// import BusinessCard from "./components/BusinessCard";
import NavbarContent from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <main className="App">
        <Switch>
          <Route exact={true} path="/">
            <Hero />
            <About />
            <Carousel />
            <Portfolio />
            <Contact />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/services">
            <Header />
            <Services />
          </Route>
          <Route path="/portfolio">
            <Header />
            <Portfolio />
          </Route>
          <Route path="/testimonials">
            <Header />
            <Testimonials />
          </Route>
          <Route path="/resume">
            <Header />
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
        <Footer />
      </main>
    </Router>
  );
}

export default App;

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
// import script from "./components/script";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  {
    console.log("test1");
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <main className="App">
        <Switch>
          <Route exact={true} path={["/", "/#"]}>
            <Hero />
            <About />
            <Carousel />
            <Services />
            <Portfolio />
            <Contact />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/about"}>
            <Header />
            <About />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/services"}>
            <Header />
            <Services />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/portfolio"}>
            <Header />
            <Portfolio />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/testimonials"}>
            <Header />
            <Testimonials />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/resume"}>
            <Header />
            <Resume />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            <NavbarContent />
            <Contact />
          </Route>
          <Redirect from="*" to="/" />
          {/* <Route path="/">
            <Hero />
          </Route> */}
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

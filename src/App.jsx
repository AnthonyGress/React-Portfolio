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
import Header from "./components/Header";
import Footer from "./components/Footer";
// import DigitalCard from "./pages/DigitalCard";
// import script from "./components/script";
import {
  BrowserRouter as Router,
//   HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ColorIdPrivacyPolicy } from './components/ColorIdPrivacyPolicy';
import { ColorIdTerms } from './components/ColorIdTerms';
import ColorID from './components/ColorID';

function App() {
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
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            <Header />
            <Contact />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/color-id"}>
            <Header />
            <ColorID />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/color-id/privacy-policy"}>
            <Header />
            <ColorIdPrivacyPolicy />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/color-id/terms"}>
            <Header />
            <ColorIdTerms />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;

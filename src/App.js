import logo from "./images/logos/logo.png";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Carousel />
      {/* <Testimonials /> */}
    </div>
  );
}

export default App;

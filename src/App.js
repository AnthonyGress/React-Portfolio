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
      <Hero />
      <About />
      <Services />
      <Carousel />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;

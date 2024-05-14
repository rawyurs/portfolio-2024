import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero2 from "./components/hero/Hero2";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="about">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Hero2 />
      </section>
      <section id="skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};


export default App;

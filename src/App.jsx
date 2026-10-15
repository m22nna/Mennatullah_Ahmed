import HeroSection from "./components/Sections/HeroSection";
import About from "./components/Sections/About";
import Navbar from "./components/Sections/Navbar";
import Contact from "./components/Sections/ContactAndFooter";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
//import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <>
    {/* //<PortfolioProvider */}
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    {/* //</PortfolioProvider> */}
    </>
  );
}

export default App;
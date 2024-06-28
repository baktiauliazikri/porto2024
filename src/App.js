import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portofolio from "./containers/portofolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import ParticlesComponent from "./utils.js/particles";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particle.js */}
      {renderparticlesJsInHomePage && (
        <ParticlesComponent
          id="particles"
          options={Particles}
          init={handleInit}
        />
      )}

      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

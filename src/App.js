import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import ParticlesComponent from "./utils/particles";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const Home = lazy(() => import("./containers/home"));
const About = lazy(() => import("./containers/about"));
const Contact = lazy(() => import("./containers/contact"));
const Portofolio = lazy(() => import("./containers/portofolio"));
const Resume = lazy(() => import("./containers/resume"));
const Skills = lazy(() => import("./containers/skills"));

const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__spinner"></div>
  </div>
);

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="App">
      {/* Global interactive particles background on all pages */}
      <ParticlesComponent id="particles" theme={theme} />

      <Navbar />

      <div className="App__main-page-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

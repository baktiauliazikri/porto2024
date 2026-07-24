import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleNavigateToPortfolio = () => {
    navigate("/portofolio");
  };

  return (
    <section id="home" className="home">
      <div className="home__content">
        <Animate
          play
          duration={1}
          delay={0.2}
          start={{ opacity: 0, transform: "translateY(-30px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <div className="home__badge">
            Software Developer • Full Stack Engineer • Quality Assurance
          </div>
        </Animate>

        <Animate
          play
          duration={1.2}
          delay={0.4}
          start={{ opacity: 0, transform: "translateY(30px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <div className="home__text-wrapper">
            <h1 className="home__title">
              Hello, I'm <span className="highlight">Bakti Aulia Zikri</span>
            </h1>
            <p className="home__subtitle">
              Passionate Software Developer specializing in building high-performance web applications, robust backend solutions, and ensuring software quality assurance.
            </p>
          </div>
        </Animate>

        <Animate
          play
          duration={1.2}
          delay={0.7}
          start={{ opacity: 0, transform: "translateY(40px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <div className="home__actions">
            <a
              href="/logo/CV_BAKTI AULIA ZIKRI_IT BA.pdf"
              download="CV_BAKTI AULIA ZIKRI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaDownload size={16} /> Download CV
            </a>
            <button className="btn btn-secondary" onClick={handleNavigateToContactMePage}>
              Hire Me
            </button>
            <button className="btn btn-outline" onClick={handleNavigateToPortfolio}>
              View Portfolio
            </button>
          </div>

          <div className="home__socials">
            <a
              href="https://github.com/baktiauliazikri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/bakti-aulia-zikri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:baktiauliazikri@gmail.com"
              aria-label="Email"
              className="social-icon"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;

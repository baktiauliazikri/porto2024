import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import {
  DiDatabase,
  DiJsBadge,
  DiLaravel,
  DiHtml5,
} from "react-icons/di";
import { FaVuejs, FaUserTie, FaReact, FaNodeJs, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const About = () => {
  const links = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bakti-aulia-zikri/",
      icon: <AiFillLinkedin size={26} />,
    },
    {
      label: "GitHub",
      link: "https://github.com/baktiauliazikri",
      icon: <AiFillGithub size={26} />,
    },
  ];

  const personalDetails = [
    { label: "Name", value: "Bakti Aulia Zikri" },
    { label: "Current Study", value: "S1 Information Systems - Binus University" },
    { label: "Prior Degree", value: "D3 Information Technology - Politeknik Negeri Padang" },
    { label: "Specialization", value: "Full Stack Engineering & System QA Analysis" },
  ];

  const jobSummary =
    "A versatile Software Developer and System Quality Assurance Analyst pursuing an S1 in Information Systems at Bina Nusantara University, holding a D3 in Information Technology from Padang State Polytechnic. Experienced in developing full-stack web applications (React.js, Vue.js, Laravel, Node.js), designing database solutions (MySQL, PostgreSQL, MongoDB), and conducting rigorous software testing for hospital information systems (SIMRS) and enterprise platforms.";

  const techStack = [
    { icon: <FaReact size={45} />, label: "React.js" },
    { icon: <FaVuejs size={45} />, label: "Vue.js" },
    { icon: <DiLaravel size={50} />, label: "Laravel" },
    { icon: <FaNodeJs size={45} />, label: "Node (Express)" },
    { icon: <DiJsBadge size={45} />, label: "JavaScript" },
    { icon: <SiTailwindcss size={45} />, label: "Tailwind CSS" },
    { icon: <DiDatabase size={45} />, label: "MySQL" },
    { icon: <SiPostgresql size={42} />, label: "PostgreSQL" },
    { icon: <SiMongodb size={45} />, label: "MongoDB" },
    { icon: <DiHtml5 size={45} />, label: "REST API" },
  ];

  return (
    <section id="about" className="about">
      <PageHeaderContent headerText="About Me" icon={<FaUserTie size={32} />} />

      <div className="about__content">
        <div className="about__personal-wrapper">
          <Animate
            play
            duration={1}
            delay={0.1}
            start={{ opacity: 0, transform: "translateX(-40px)" }}
            end={{ opacity: 1, transform: "translateX(0px)" }}
          >
            <div className="about-card">
              <div className="about-card__header">
                <div>
                  <h3>Bakti Aulia Zikri</h3>
                  <p className="about-card__subheading">
                    Software Developer / Full Stack Engineer / Quality Assurance
                  </p>
                </div>
                <div className="about-card__socials">
                  {links.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="social-btn"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              <p className="about-card__summary">{jobSummary}</p>

              <div className="about-card__details">
                {personalDetails.map((detail, idx) => (
                  <div key={idx} className="detail-item">
                    <span className="detail-label">{detail.label}</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="about-card__cv-wrapper">
                <a
                  href="/logo/CV_BAKTI AULIA ZIKRI_IT BA.pdf"
                  download="CV_BAKTI AULIA ZIKRI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-cv-btn"
                >
                  <FaDownload size={16} /> Download Official CV (PDF)
                </a>
              </div>
            </div>
          </Animate>
        </div>

        <div className="about__services-wrapper">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{ opacity: 0, transform: "translateX(40px)" }}
            end={{ opacity: 1, transform: "translateX(0px)" }}
          >
            <div className="tech-section-card">
              <h4 className="tech-title">Core Technologies & Ecosystem</h4>
              <div className="tech-grid">
                {techStack.map((item, idx) => (
                  <div key={idx} className="tech-grid-card">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

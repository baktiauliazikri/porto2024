import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import {   } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import {
  DiDatabase,
  DiJsBadge,
  DiLaravel,
  DiHtml5,
  DiAndroid,
} from "react-icons/di";
import { FaVuejs, FaUserTie } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"; // Import LinkedIn and GitHub icons

const About = () => {
  const links = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bakti-aulia-zikri/",
      icon: <AiFillLinkedin size={24} />,
    },
    {
      label: "GitHub",
      link: "https://github.com/baktiauliazikri",
      icon: <AiFillGithub size={24} />,
    },
  ];

  const jobSummary =
    "A dedicated Programmer with a Diploma in Information Technology from Padang State Polytechnic. Possesses a strong understanding of software development, technological advancements, and analytical skills. Proficient in multiple programming languages and has hands-on experience through internships in IT Solutions companies. Actively involved in campus organizations. Ready to contribute to the company and team with a high level of dedication to professional growth, excellent communication skills, and a deep understanding of the software development life cycle.";

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<FaUserTie  size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="card">
              <div className="card__info">
                <h3>Fullstack Developer</h3>
                <div className="links">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p>{jobSummary}</p>
            </div>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="about__content__serviceWrapper__innerContent">
              <div>
                <DiLaravel size={80} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiDatabase size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiJsBadge size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <FaVuejs size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <TbBrandReactNative
                  size={60}
                  color="var(--blue-theme-main-color)"
                />
              </div>
              <div>
                <DiHtml5 size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <SiFlutter size={50} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--blue-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

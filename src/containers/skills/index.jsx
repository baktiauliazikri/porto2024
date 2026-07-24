import React from "react";
import { Line } from "rc-progress";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { Animate, AnimateGroup } from "react-simple-animate";
import { skillsData } from "./utils";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={32} />}
      />

      <div className="skills__content-wrapper">
        <AnimateGroup play>
          {skillsData.map((item, i) => (
            <Animate
              key={i}
              play
              duration={0.8}
              delay={i * 0.15}
              start={{ opacity: 0, transform: "translateY(30px)" }}
              end={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <div className="skills__card">
                <div className="skills__card__header">
                  <h3 className="skills__card__title">{item.label}</h3>
                </div>
                <div className="skills__card__content">
                  {item.data.map((skillItem, j) => (
                    <div className="progressbar-wrapper" key={j}>
                      <div className="progressbar-info">
                        <span className="skill-name">{skillItem.skillName}</span>
                        <span className="skill-percentage">{skillItem.percentage}%</span>
                      </div>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor="#60d86e"
                        trailWidth="3"
                        trailColor="rgba(255, 255, 255, 0.1)"
                        strokeLinecap="round"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Animate>
          ))}
        </AnimateGroup>
      </div>
    </section>
  );
};

export default Skills;

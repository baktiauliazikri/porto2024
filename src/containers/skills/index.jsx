import React from "react";
import { Line } from "rc-progress";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills  } from "react-icons/gi";
import { skillsData } from "./utils";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />

      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__card">
            <div className="skills__card__header">
              <h3 className="skills__card__title">{item.label}</h3>
            </div>
            {/* <h3 className="skills__card__title">{item.label}</h3> */}
            <div className="skills__card__content">
              {item.data.map((skillItem, j) => (
                <div className="progressbar-wrapper" key={j}>
                  <p>{skillItem.skillName}</p>
                  <Line
                    percent={skillItem.percentage}
                    strokeWidth="2"
                    strokeColor="var(--blue-theme-skill-background-color)"
                    trailWidth={"2"}
                    strokeLinecap="square"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdWork, MdSchool, MdDescription } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<MdDescription size={32} />}
      />

      <div className="timeline">
        <div className="timeline__section">
          <div className="timeline__header">
            <MdWork className="timeline__header-icon" size={24} />
            <h3 className="timeline__header-title">Work Experience</h3>
          </div>

          <VerticalTimeline layout="1-column-left" lineColor="rgba(96, 216, 110, 0.3)">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__element"
                contentStyle={{
                  background: "var(--blue-theme-card-background)",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1px solid var(--blue-theme-border-color)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  backdropFilter: "blur(12px)",
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--blue-theme-border-color)" }}
                icon={<MdWork />}
                iconStyle={{
                  background: "var(--blue-theme-nav-background-color)",
                  color: "var(--blue-theme-main-color)",
                  border: "2px solid var(--blue-theme-main-color)",
                  boxShadow: "var(--blue-theme-glow)",
                }}
              >
                <div className="timeline__element-header">
                  <div className="timeline__badge-row">
                    <span className="timeline__date-badge">{item.date}</span>
                    {item.logo && (
                      <img src={item.logo} alt={item.subTitle} className="timeline__company-logo" />
                    )}
                  </div>
                  <h3 className="timeline__item-title">{item.title}</h3>
                  <h4 className="timeline__item-subtitle">{item.subTitle}</h4>
                </div>
                <p className="timeline__item-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__section">
          <div className="timeline__header">
            <MdSchool className="timeline__header-icon" size={24} />
            <h3 className="timeline__header-title">Education</h3>
          </div>

          <VerticalTimeline layout="1-column-left" lineColor="rgba(96, 216, 110, 0.3)">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__element"
                contentStyle={{
                  background: "var(--blue-theme-card-background)",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1px solid var(--blue-theme-border-color)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  backdropFilter: "blur(12px)",
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--blue-theme-border-color)" }}
                icon={<MdSchool />}
                iconStyle={{
                  background: "var(--blue-theme-nav-background-color)",
                  color: "var(--blue-theme-main-color)",
                  border: "2px solid var(--blue-theme-main-color)",
                  boxShadow: "var(--blue-theme-glow)",
                }}
              >
                <div className="timeline__element-header">
                  <div className="timeline__badge-row">
                    <span className="timeline__date-badge">{item.date}</span>
                    {item.logo && (
                      <img src={item.logo} alt={item.title} className="timeline__company-logo" />
                    )}
                  </div>
                  <h3 className="timeline__item-title">{item.title}</h3>
                  <h4 className="timeline__item-subtitle">{item.subTitle}</h4>
                </div>
                <p className="timeline__item-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

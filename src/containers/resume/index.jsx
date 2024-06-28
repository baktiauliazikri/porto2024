import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdWork, MdLibraryBooks, MdMarkunreadMailbox  } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<MdMarkunreadMailbox  size={40} />}
      />

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1.5px solid var(--blue-theme-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--blue-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <div className="title-date">
                    <h3>{item.title}</h3>
                    <span className="date">{item.date}</span>
                  </div>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--blue-theme-sub-text-color)",
                  border: "1.5px solid var(--blue-theme-main-color)",
                }}
                icon={<MdLibraryBooks />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--blue-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <div className="title-date">
                    <h3>{item.title}</h3>
                    <span className="date">{item.date}</span>
                  </div>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

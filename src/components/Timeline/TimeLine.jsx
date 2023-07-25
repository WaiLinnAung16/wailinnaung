import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import "./TimeLine.css";
const Timeline = () => {
  return (
    <>
      <VerticalTimeline lineColor="#ddd" className=" lg:-ml-[120px]">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="right"
          contentStyle={{
            background: "#201C1C",
            color: "#fff",
            border: "2px  solid #fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{ border: "none" }}
          date="5.3.2023 - present"
          dateClassName=" text-black dark:text-white"
          icon={<FaStar />}
        >
          <h3 className="vertical-timeline-element-title ">
            The Forward Society
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Volunteering Frontend Developer
          </h4>
          <p>Working Together with Design, Frontend and Backend team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
          contentStyle={{
            background: "#201C1C",
            color: "#fff",
            border: "2px  solid #fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{ border: "none" }}
          date="15.5.2023 - present"
          dateClassName=" text-black dark:text-white"
          icon={<RiTeamFill />}
        >
          <h3 className="vertical-timeline-element-title">MMSIT Workshop</h3>

          <p>Team collaboration and making real world projects</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;

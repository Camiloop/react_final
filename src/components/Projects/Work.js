import React from "react";
import "./Work.css";
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
      <h1> Projects</h1>
      <h2>These are some of the projects I've worked on.</h2>
      <div className="work-container__projects">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;

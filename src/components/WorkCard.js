import React from "react";
import "./WorkCard.css";
import proj1 from "../imgs/project-1.png";
import WorkCardData from "./WorkCardData"

const WorkCard = (props) => {
  return (
    <a href={props.view} target='__blank'>
    <div className="card-container">
      <img src={props.imgsrc}></img>
      <div className="card-container__text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="card-container__btn">
        <a href={props.view} target="__blank">
          <btn>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="2 -3 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path>
            </svg>
            Link
          </btn>
        </a>
        <a href={props.source} target="__blank">
          <btn>
            <svg
              fill="#FFFFFF"
              stroke-width="0"
              viewBox="100 -100 1024 1024"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
            Source
          </btn>
        </a>
      </div>
    </div>
    </a>
  );
};

export default WorkCard;

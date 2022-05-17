import React from "react";
import { useState } from "react";

import Room230 from "./room230";
import Room233 from "./room233";
import Room234 from "./room234";
import Room235 from "./room235";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor2 = () => {
  const [room, setRoom] = useState(<Room230 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room230") {
      setRoom(<Room230 />);
    } else if (click === "room233") {
      setRoom(<Room233 />);
    } else if (click === "room234") {
      setRoom(<Room234 />);
    } else {
      setRoom(<Room235 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="US_Floor2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 870.6 554.62"
        >
          <path
            class="extras"
            d="M130.54,3.13l114.23-1.11l0.37,40.83l-114.23,1.11L130.54,3.13z"
          />
          <path
            class="offices"
            d="M130.54,369.43H2V3.13h128.54v54.46V369.43z"
          />
          <path class="extras" d="M171.64,43.93h73.51v43.03h-73.51V43.93z" />
          <path
            class="extras"
            d="M163.21,209.01V100.5l8.43-13.54h76.16v122.05H163.21z"
          />
          <path
            class="extras"
            d="M163.21,295.33v-86.32h84.58v160.42h-84.58V295.33z"
          />
          <path class="extras" d="M307.41,369.43v62.85h-59.61v-62.85H307.41z" />
          <path
            class="extras"
            d="M307.41,270.25v99.18h-59.61v-146.6h59.61V270.25z"
          />
          <path
            class="classrooms"
            id={"room230"}
            onClick={roomHandler}
            d="M307.41,400.86V222.83h116.58v178.03H307.41z"
          />
          <path
            class="classrooms"
            id={"room233"}
            onClick={roomHandler}
            d="M423.98,400.86V222.83h132.96v178.03h-64.61H423.98z"
          />
          <path
            class="classrooms"
            id={"room234"}
            onClick={roomHandler}
            d="M556.95,400.86V222.83h157.78v178.03h-94.57H556.95z"
          />
          <path
            class="classrooms"
            id={"room235"}
            onClick={roomHandler}
            d="M714.72,400.86V222.83H868.6v178.03H749.37H714.72z"
          />
          <path class="extras" d="M696,428.42v-27.57h130.62v27.57H696z" />
          <path class="extras" d="M667.44,428.42h-58.99v-27.57h58.99V428.42z" />
          <path class="extras" d="M545.24,428.42h-36.99v-27.57h36.99V428.42z" />
          <path class="extras" d="M469.4,400.86h38.86v27.57H469.4V400.86z" />
          <path class="extras" d="M423.98,428.42h-35.11v-27.57h35.11V428.42z" />
          <path class="extras" d="M350.01,400.86h38.86v27.57h-38.86V400.86z" />
          <path
            class="hallways"
            d="M130.92,45.04h40.72v43.01l-8.43,13.54v268.93h84.58v62.85h59.61v-31.43h42.6v27.57h73.97v-27.57h45.41v27.57
  h75.84v-27.57h63.2v27.57h58.99v-27.57H696v27.57h130.62v-27.57h41.98v76.6H243.11v72.34H205.5V433.37l-28.25-28.45H63.33v-34.4
  h67.21L130.92,45.04z"
          />
          <text
            transform="matrix(0.9673 0 0 1 22.2275 186.2786)"
            class="st1 st2"
          >
            Offices
          </text>
          <text
            transform="matrix(0.9673 0 0 1 152.7793 33.7024)"
            class="st1 st2"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.0572 0 0 1 733.4893 420.4993)"
            class="st1 st3"
          >
            Stairs
          </text>
          <text
            transform="matrix(0.9673 0 0 1 182.0059 72.0862)"
            class="st1 st4"
          >
            Elevator
          </text>
          <text
            transform="matrix(0.9673 0 0 1 171.6362 152.2512)"
            class="st1 st5"
          >
            Bathrooms
          </text>
          <text
            transform="matrix(0.9673 0 0 1 317.2104 311.843)"
            class="st1 st2"
          >
            US 230
          </text>
          <text
            transform="matrix(0.9673 0 0 1 440.7427 318.0217)"
            class="st1 st2"
          >
            US 233
          </text>
          <text
            transform="matrix(0.9673 0 0 1 585.4092 305.761)"
            class="st1 st2"
          >
            US 234
          </text>
          <text
            transform="matrix(0.9673 0 0 1 737.0156 289.9456)"
            class="st1 st2"
          >
            US 235
          </text>
          <path
            class="st0"
            fill="white"
            d="M177.15,405.02l28.35,28.35v119.25H63.33v-147.7L177.15,405.02z"
          />
        </svg>
      </div>
      <div className="classes">
        <h2 className="classes-title">Room Schedules</h2>
        <div className="classes-schedule">{room}</div>
      </div>
    </div>
  );
};

export default Floor2;

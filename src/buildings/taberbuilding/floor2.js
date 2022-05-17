import React from "react";
import { useState } from "react";

import Room306 from "./room306";
import Room309 from "./room309";
import Room314 from "./room314";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor2 = () => {
  const [room, setRoom] = useState(<Room306 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room306") {
      setRoom(<Room306 />);
    } else if (click === "room309") {
      setRoom(<Room309 />);
    } else {
      setRoom(<Room314 />);
    }
  };

  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Taber_Floor2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1159.02 588.65"
        >
          <path
            class="st0"
            className="offices"
            d="M0.5,344.94h227.16V536.3h-56.79v51.85H37.54V536.3H0.5V344.94z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room309"
            onClick={roomHandler}
            d="M1158.52,513.67h-37.04v74.49H988.15v-74.49h-56.79V238.77h227.16V513.67z"
          />
          <path
            class="st0"
            className="offices"
            d="M931.36,344.94V536.3H646.18V344.94H931.36z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room306"
            onClick={roomHandler}
            d="M512.85,344.94V536.3H227.66V344.94H512.85z"
          />
          <path
            class="st0"
            className="extras"
            d="M512.85,344.94h133.33V536.3H512.85V344.94z"
          />
          <path
            class="st0"
            className="extras"
            d="M0.5,238.77V0.5h227.16v238.27H0.5z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room314"
            onClick={roomHandler}
            d="M931.36,238.77V0.5h227.16v238.27H931.36z"
          />
          <path
            class="st0"
            className="extras"
            d="M227.66,238.77V72.1h285.19v166.67H227.66z"
          />
          <path
            class="st0"
            className="extras"
            d="M512.85,72.1h133.33v166.67H512.85V72.1z"
          />
          <path
            class="st0"
            className="offices"
            d="M931.36,189.39H705.44v49.38h-59.26V72.1h285.19V189.39z"
          />
          <path
            class="st0"
            className="hallways"
            d="M931.36,344.94H0.5V238.77h704.94v-49.38h225.93V344.94z"
          />
          <text
            transform="matrix(1.1248 0 0 1 722.4426 440.6231)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 725.454 137.1729)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 984.3188 440.6241)"
            class="st1 st2 st3"
          >
            TAB 309
          </text>
          <text
            transform="matrix(1.1248 0 0 1 987.3003 149.7764)"
            class="st1 st2 st3"
          >
            TAB 314
          </text>
          <text
            transform="matrix(1.1248 0 0 1 533.9332 155.4376)"
            class="st1 st2 st4"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 289.3763 440.6231)"
            class="st1 st2 st3"
          >
            TAB 306
          </text>
          <text
            transform="matrix(1.1248 0 0 1 44.1181 440.6241)"
            class="st1 st2 st3"
          >
            Offices
          </text>
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

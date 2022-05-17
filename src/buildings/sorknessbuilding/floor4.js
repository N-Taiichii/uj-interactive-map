import React from "react";
import { useState } from "react";

import Room401 from "./room401";
import Room402 from "./room402";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor4 = () => {
  const [room, setRoom] = useState(<Room401 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room401") {
      setRoom(<Room401 />);
    } else {
      setRoom(<Room402 />);
    }
  };

  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Sorkness_Floor4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1201.33 455.56"
        >
          <path
            class="st0"
            className="extras"
            d="M681.45,2v158.65h-124V2H681.45z"
          />
          <path
            class="st0"
            className="extras"
            d="M681.45,199.31v-64h88v64H681.45z"
          />
          <path
            class="st0"
            className="extras"
            d="M681.45,135.31V2h132v197.31h-44v-64H681.45z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room401"
            onClick={roomHandler}
            d="M454.78,35.31v363.11H109.45V272.65H2V35.31H454.78z"
          />
          <path
            class="st0"
            className="bathrooms"
            d="M813.45,272.65v125.78h-132V272.65H813.45z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room402"
            onClick={roomHandler}
            d="M813.45,199.31V41.09h134.22V2h59.72v39.09h193.94v231.56h-95.89v126.67h-98.06v18.67H945v-19.11H813.45V272.65
	V199.31z"
          />
          <text
            transform="matrix(1.1248 0 0 1 691.0632 167.3143)"
            class="st1 st2 st3"
          >
            Elevator
          </text>
          <text transform="matrix(1.1248 0 0 1 724.0299 328.6149)">
            <tspan x="0" y="0" class="st1 st2 st4">
              Mens
            </tspan>
            <tspan x="-20.82" y="20.68" class="st1 st2 st4">
              Bathroom
            </tspan>
          </text>
          <text
            transform="matrix(1.1248 0 0 1 892.5603 209.9903)"
            class="st1 st2 st5"
          >
            SORK 402
          </text>
          <text
            transform="matrix(1.1248 0 0 1 147.42 209.9904)"
            class="st1 st2 st5"
          >
            SORK 401
          </text>
          <path
            class="st0"
            className="hallways"
            d="M454.78,35.31l102.67,125.33h124v38.67h132v73.33h-132v180.91h-124v-55.13H454.78V35.31z"
          />
          <path
            class="st0"
            className="extras"
            d="M2,272.65h107.45v180.91H2V272.65z"
          />
          <path
            class="st0"
            className="extras"
            d="M1201.33,455.56h-95.89V272.65h95.89V455.56z"
          />
          <text
            transform="matrix(1.1248 0 0 1 18.04 357.7412)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1121.0386 357.7413)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 585.4568 88.2961)"
            class="st1 st2 st6"
          >
            Stairs
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

export default Floor4;

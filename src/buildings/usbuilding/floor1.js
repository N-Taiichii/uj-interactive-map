import React from "react";
import { useState } from "react";

import Room132 from "./room132";
import Room134 from "./room134";
import Room136 from "./room136";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor1 = () => {
  const [room, setRoom] = useState(<Room132 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room132") {
      setRoom(<Room132 />);
    } else if (click === "room134") {
      setRoom(<Room134 />);
    } else {
      setRoom(<Room136 />);
    }
  };

  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          id="US_Floor1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1112.03 793.08"
        >
          <g id="Layer_2">
            <polygon
              class="st0"
              points="2,81.11 139.52,81.11 139.52,33.11 245.59,33.11 245.59,81.11 290.04,81.11 290.04,346 989.3,346 
      989.3,544.52 1059.22,544.52 1059.22,609.11 986.93,609.11 986.93,632.22 275.81,632.22 275.81,708.66 208.26,708.66 
      208.26,756.66 141.89,756.66 141.89,708.66 76.11,708.66 76.11,509.55 2,509.55 	"
            />
            <path class="exits" d="M139.52,81.11v-48h106.07v48H139.52z" />
            <path class="offices" d="M2,81.11h158.26v428.44H76.11H2V81.11z" />
            <path class="extras" d="M290.04,138h-88.3V81.11h88.3V138z" />
            <path class="extras" d="M290.04,138v43.26h-88.3V138H290.04z" />
            <path
              class="bathrooms"
              d="M290.04,181.26V321.7H188.7V181.26H290.04z"
            />
            <path class="extras" d="M290.04,321.7v68.74H188.7V321.7H290.04z" />
            <rect
              x="201.74"
              y="390.44"
              class="st0"
              width="88.3"
              height="114.37"
            />
            <path
              class="extras"
              d="M290.04,346h158.81v168.3h-88.3v-9.48h-70.52V346z"
            />
            <rect
              x="269.89"
              y="504.81"
              class="st0"
              width="90.67"
              height="75.26"
            />
            <rect
              x="388.41"
              y="514.29"
              class="st0"
              width="60.44"
              height="59.85"
            />
            <path
              class="classrooms"
              id={"room132"}
              onClick={roomHandler}
              d="M448.85,346h207.41v196.44h-32.59v31.7H448.85V346z"
            />
            <path
              class="classrooms"
              id={"room134"}
              onClick={roomHandler}
              d="M656.26,346h169.48v228.15H688.85v-31.7h-32.59V346z"
            />
            <path
              class="classrooms"
              id={"room136"}
              onClick={roomHandler}
              d="M825.74,542.44V346H989.3v196.44H825.74z"
            />
            <path class="extras" d="M989.3,542.44v37.63H880.26v-37.63H989.3z" />
            <path class="exits" d="M989.3,609.11v-64.59h69.93v64.59H989.3z" />
            <path class="exits" d="M141.89,708.66h66.37v48h-66.37V708.66z" />
            <path
              class="hallways"
              d="M160.26,81.11h41.48v100.15H188.7v209.19h13.04v114.37h68.15v75.26h90.67v-65.78h27.85v59.85h235.26v-31.7
      h65.19v31.7h136.89v-31.7h54.52v37.63H989.3v52.15H275.81v76.44H76.11V509.55h84.15V81.11z"
            />
            <path class="extras" d="M201.74,390.44h88.3v114.37h-88.3V390.44z" />
            <path
              class="extras"
              d="M269.89,504.81h90.67v75.26h-90.67V504.81z"
            />
            <path
              class="extras"
              d="M388.41,514.29h60.44v59.85h-60.44V514.29z"
            />
          </g>
          <g id="Layer_3">
            <text
              transform="matrix(0.9963 0 0 1 164.5043 25.8516)"
              class="st7 st8"
            >
              Exit
            </text>
            <text
              transform="matrix(0.9963 0 0 1 151.4257 786.3174)"
              class="st7 st8"
            >
              Exit
            </text>
            <text
              transform="matrix(0.9963 0 0 1 1062.4149 588.0651)"
              class="st7 st8"
            >
              Exit
            </text>
            <text
              transform="matrix(0.9963 0 0 1 209.3278 122.2048)"
              class="st7 st8"
            >
              Stairs
            </text>
            <text
              transform="matrix(0.9963 0 0 1 900.3068 573.545)"
              class="st7 st8"
            >
              Stairs
            </text>
            <text
              transform="matrix(0.9963 0 0 1 42.6958 288.7838)"
              class="st7 st8"
            >
              Offices
            </text>
            <text
              transform="matrix(0.9963 0 0 1 196.0807 260.8368)"
              class="st7 st9"
            >
              Bathrooms
            </text>
            <text
              transform="matrix(0.9963 0 0 1 217.0843 164.8018)"
              class="st7 st10"
            >
              Elevator
            </text>
            <text
              transform="matrix(0.9963 0 0 1 502.9165 460.8134)"
              class="st7 st8"
            >
              US 132
            </text>
            <text
              transform="matrix(0.9963 0 0 1 702.0564 430.8877)"
              class="st7 st8"
            >
              US 134
            </text>
            <text
              transform="matrix(0.9963 0 0 1 858.7971 481.0266)"
              class="st7 st8"
            >
              US 136
            </text>
          </g>
        </svg>
      </div>
      <div className="classes">
        <h2 className="classes-title">Room Schedules</h2>
        <div className="classes-schedule">{room}</div>
      </div>
    </div>
  );
};

export default Floor1;

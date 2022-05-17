import React from "react";
import { useState } from "react";

import Room247 from "./room247";
import Room248 from "./room248";
import Room251 from "./room251";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor3 = () => {
  const [room, setRoom] = useState(<Room247 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "MCTH247") {
      setRoom(<Room247 />);
    } else if (click === "MCTH248") {
      setRoom(<Room248 />);
    } else {
      setRoom(<Room251 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="OrladyMckth_Floor3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1174.45 582.82"
        >
          <path
            class="st0"
            className="extras"
            d="M347.05,460.1l0-93.02h65.18v92.85L347.05,460.1z"
          />
          <rect
            x="213.71"
            y="327.38"
            class="st0"
            className="extras"
            width="133.34"
            height="39.7"
          />
          <polygon
            class="st0"
            className="offices"
            points="412.23,383.67 554.45,383.67 554.45,407.97 594.15,407.97 594.15,475.61 532.06,475.61 532.06,459.61 
	412.23,459.61 "
          />
          <rect
            x="448.37"
            y="327.38"
            class="st0"
            className="bathrooms"
            width="106.07"
            height="56.3"
          />
          <path
            class="st0"
            className="offices"
            d="M307.93,367.08h39.12v93.02l-150.1,0v17.29l-101.33,0V460.5H74.28l0-56.89l0-107.05h66.54l0,104.3
	c55.58,0,111.16,0,166.74,0C307.68,389.6,307.81,378.34,307.93,367.08z"
          />
          <polygon
            class="st0"
            className="extras"
            points="74.28,296.56 74.28,248.06 0.5,248.06 0.5,403.61 74.28,403.61 "
          />
          <path
            class="st0"
            className="offices"
            d="M74.28,265.75l126.39,0v30.81l353.78,0v-48.5c27.19,0,54.37,0,81.56,0c0.02-3.19,0.03-6.37,0.05-9.56
	c0-11.85,0-23.7,0-35.56c-33.19,0-66.37,0-99.56,0v35.56l-327.11,0l0-41.11l-104.89,0l0,40.89l-30.22,0L74.28,265.75z"
          />
          <polygon
            class="st0"
            className="extras"
            points="587.14,407.97 587.14,279.97 665.86,279.97 665.86,440.15 657.39,440.15 657.39,459.61 637.83,459.61 
	637.83,475.61 594.15,475.61 594.15,407.97 "
          />
          <rect
            x="665.86"
            y="308.41"
            class="st0"
            className="extras"
            width="62.81"
            height="63.41"
          />
          <polygon
            class="st0"
            className="extras"
            points="706.15,238.33 706.15,272.26 745.86,272.26 745.86,250.52 724.81,238.28 "
          />
          <polygon
            class="st0"
            className="extras"
            points="745.86,272.26 745.86,250.52 750.2,253.05 757.06,240 814.31,269.48 798.83,299.54 "
          />
          <rect
            x="792.43"
            y="303.44"
            transform="matrix(0.4578 -0.8891 0.8891 0.4578 146.3912 903.8069)"
            class="st0"
            className="extras"
            width="43.47"
            height="56.89"
          />
          <polygon
            class="st0"
            className="extras"
            points="728.67,352.25 728.67,371.82 665.86,371.82 665.86,440.15 711.25,440.53 771.06,477.75 813.25,395.8 
	"
          />
          <path
            class="st0"
            className="extras"
            d="M798.83,299.54l39.33-76.39l64.28,33.1l-39.33,76.39l-13.7-7.05L798.83,299.54z"
          />
          <rect
            x="766.82"
            y="191.45"
            transform="matrix(0.4578 -0.8891 0.8891 0.4578 226.2416 829.0716)"
            class="st0"
            className="extras"
            width="52.01"
            height="75.21"
          />
          <path
            class="st0"
            className="classrooms"
            id="MCTH251"
            onClick={roomHandler}
            d="M903.93,338.66l145.49,74.91l-15.47,30.04l-72.81,138.54l-143.7-75.52L903.93,338.66z"
          />
          <path
            class="st0"
            className="extras"
            d="M903.93,338.66l29.09-56.51c48.79,25.12,97.59,50.25,146.38,75.37c-9.99,18.68-19.99,37.36-29.98,56.05
	L903.93,338.66z"
          />
          <polygon
            class="st0"
            className="classrooms"
            id="MCTH248"
            onClick={roomHandler}
            points="1026.78,100.07 1173.78,176.17 1079.4,357.52 933.02,282.15 "
          />
          <path
            class="st0"
            className="extras"
            d="M1051.32,52.39l12.51,6.44l96.54,49.71l-24.55,47.68l-109.04-56.15L1051.32,52.39z"
          />
          <path
            class="st0"
            className="extras"
            d="M997.16,78.3l-65.17-33.56l23.16-44.06l64.52,33.91L997.16,78.3z"
          />
          <path
            class="st0"
            className="classrooms"
            id="MCTH247"
            onClick={roomHandler}
            d="M771.29,188.72l93.78-178.43l129.64,66.75l-92.27,179.21L771.29,188.72z"
          />
          <polygon
            class="st0"
            className="hallways"
            points="636,248.06 706.15,248.06 706.15,272.26 745.86,272.26 798.83,299.54 778.93,338.19 829.51,364.23 
	849.41,325.58 863.11,332.64 994.71,77.04 997.16,78.3 1019.66,34.58 1051.32,52.39 817.44,506.63 771.06,477.75 813.25,395.8 
	728.67,352.25 728.67,308.41 665.86,308.41 665.86,279.97 587.14,279.97 587.14,407.97 554.45,407.97 554.45,383.67 554.45,327.38 
	448.37,327.38 448.37,383.67 412.23,383.67 412.23,367.08 347.05,367.08 347.05,327.38 213.71,327.38 213.71,367.08 307.93,367.08 
	307.56,400.86 140.82,400.86 140.82,296.56 74.28,296.56 74.28,265.75 200.67,265.75 200.67,296.56 554.45,296.56 554.45,248.06 "
          />
          <text
            transform="matrix(1.1248 0 0 1 350.6207 415.2688)"
            class="st1 st2 st3"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 156.1053 429.6432)"
            class="st1 st2 st3"
          >
            offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 347.047 269.3931)"
            class="st1 st2 st3"
          >
            offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 468.2788 429.643)"
            class="st1 st2 st3"
          >
            offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 460.2936 355.5238)"
            class="st1 st2 st3"
          >
            Bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 9.6063 327.3754)"
            class="st1 st2 st3"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 671.4028 342.9849)"
            class="st1 st2 st4"
            fontSize={"0.8rem"}
          >
            Elevator
          </text>
          <text
            transform="matrix(1.1248 0 0 1 796.3642 331.8867)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1070.3641 107.0014)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 868.9797 460.1002)"
            class="st1 st2 st7"
          >
            MCTH 251
          </text>
          <text
            transform="matrix(1.1248 0 0 1 817.4404 143.059)"
            class="st1 st2 st7"
          >
            MCTH 247
          </text>
          <text
            transform="matrix(1.1248 0 0 1 987.3818 233.9394)"
            class="st1 st2 st7"
          >
            MCTH 248
          </text>
          <rect
            x="213.71"
            y="327.38"
            class="st0"
            className="extras"
            width="133.34"
            height="39.7"
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

export default Floor3;

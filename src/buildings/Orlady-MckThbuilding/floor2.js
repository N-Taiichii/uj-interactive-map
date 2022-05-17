import React from "react";
import { useState } from "react";

import Room123 from "./room123";
import Room121 from "./room121";
import Room134 from "./room134";
import Room133 from "./room133";
import Room137 from "./room137";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor2 = () => {
  const [room, setRoom] = useState(<Room121 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "ORL121") {
      setRoom(<Room121 />);
    } else if (click === "ORL123") {
      setRoom(<Room123 />);
    } else if (click === "MCTH133") {
      setRoom(<Room133 />);
    } else if (click === "MCTH134") {
      setRoom(<Room134 />);
    } else {
      setRoom(<Room137 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="OrladyMckth_Floor2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1177.57 585.57"
        >
          <path
            class="st1"
            className="hallways"
            d="M1032.52,13.43l44.59,23.43l-11.85,22.56l-24.95,47.38c-32.22,56.22-64.44,112.44-96.65,168.66
	c-8.77,14.27-17.54,28.54-26.31,42.81c-30.94,45.6-61.88,91.21-92.82,136.81L773.08,428l-20.54,39l-40.29-25.08l-53.86-0.47
	l-0.83-73.91l63.41,0v-62.83l-63.41,0l0-24.28l-255.41,0v37.93l26.07,0.11l0,43.15l-95.4,0l0-81.19l-257.54,0l0-40.76L696,239.75
	l29.81-0.07l10.9,6.34l14.49,8.43l6.86-13.05l-9.97-5.24l23.83-45.35l130.92,68.93l117.81-223.76L1032.52,13.43z"
          />
          <rect
            x="1.5"
            y="249.46"
            class="st1"
            className="extras"
            width="73.78"
            height="155.56"
          />
          <rect
            x="105.5"
            y="198.79"
            class="st1"
            className="extras"
            width="48.95"
            height="40.89"
          />
          <rect
            x="154.45"
            y="198.79"
            class="st1"
            className="extras"
            width="55.94"
            height="40.89"
          />
          <polygon
            class="st1"
            className="extras"
            points="75.28,461.9 96.61,461.9 96.61,478.79 154.45,478.79 154.45,280.44 75.28,280.44 "
          />
          <polygon
            class="st1"
            className="classrooms"
            id="ORL123"
            onClick={roomHandler}
            points="154.45,478.79 197.94,478.79 197.94,461.89 332.82,461.54 332.82,280.44 154.45,280.44 "
          />
          <polygon
            class="st1"
            className="exits"
            points="332.82,461.54 402.15,461.36 402.15,425.03 332.82,425.03 "
          />
          <rect
            x="332.82"
            y="361.63"
            class="st1"
            className="extras"
            width="69.33"
            height="63.41"
          />
          <rect
            x="402.15"
            y="361.63"
            class="st1"
            className="labs"
            width="90.67"
            height="99.49"
          />
          <path
            class="st1"
            className="bathrooms"
            d="M402.15,318.37l0-37.93l90.67,0l0,81.19l-64.59,0c0-14.38,0-28.77,0-43.15
	C419.53,318.44,410.84,318.4,402.15,318.37z"
          />
          <polygon
            class="st1"
            className="classrooms"
            id="ORL121"
            onClick={roomHandler}
            points="492.82,280.44 657.56,280.44 657.56,461.01 638.83,461.01 638.83,477.01 533.06,477.01 533.06,461.01 
	492.82,461.01 "
          />
          <rect
            x="657.56"
            y="304.72"
            class="st1"
            className="extras"
            width="63.41"
            height="62.83"
          />
          <polygon
            class="st1"
            className="extras"
            points="696.01,239.75 697,269.9 735.9,268.28 736.71,246.02 725.81,239.68 "
          />
          <path class="st1" className="extras" d="M732.5,131.88" />
          <path
            class="st1"
            className="extras"
            d="M1065.25,59.42l96.48,50.8l-24.95,47.38l-96.48-50.8L1065.25,59.42z"
          />
          <path
            class="st1"
            className="extras"
            d="M997.45,80.08l-64.5-33.96l23.22-44.09l64.5,33.96L997.45,80.08z"
          />
          <polygon
            class="st1"
            className="classrooms"
            id="MCTH134"
            onClick={roomHandler}
            points="997.45,80.08 902.85,259.74 771.93,190.81 866.5,11.19 "
          />
          <rect
            x="774.19"
            y="280.98"
            transform="matrix(0.4659 -0.8848 0.8848 0.4659 143.8215 875.7856)"
            class="st1"
            className="extras"
            width="46.31"
            height="75.56"
          />
          <polygon
            class="st1"
            className="exits"
            points="752.54,467 773.08,428 824.52,455.08 802.03,497.81 "
          />
          <path
            class="st1"
            className="classrooms"
            id="MCTH137"
            onClick={roomHandler}
            d="M802.03,497.81l16.42,10.22l143.7,75.52l72.81-138.54l26.72-50.75c-48.11-25.33-96.22-50.66-144.33-75.99
	c-30.94,45.6-61.88,91.21-92.82,136.81L802.03,497.81z"
          />
          <path
            class="st1"
            className="extras"
            d="M917.34,318.27c48.11,25.33,96.22,50.66,144.33,75.99l25.04-47.56c-47.09-24.79-94.18-49.58-141.27-74.38
	C936.08,287.64,926.71,302.96,917.34,318.27z"
          />
          <rect
            x="1036.1"
            y="377.25"
            transform="matrix(0.4659 -0.8848 0.8848 0.4659 218.4661 1185.9994)"
            class="st1"
            className="extras"
            width="111.05"
            height="69.57"
          />
          <path
            class="st1"
            className="classrooms"
            id="MCTH133"
            onClick={roomHandler}
            d="M945.44,272.33c31.62-55.18,63.24-110.35,94.86-165.53l135.25,71.17l-88.84,168.73
	C1039.62,321.91,992.53,297.12,945.44,272.33z"
          />
          <rect
            x="537.5"
            y="204.35"
            class="st1"
            className="extras"
            width="50.64"
            height="35.56"
          />
          <rect
            x="588.14"
            y="204.35"
            class="st1"
            className="extras"
            width="48.92"
            height="35.56"
          />
          <text
            transform="matrix(1.1248 0 0 1 174.3011 378.7274)"
            class="st2 st3 st4"
          >
            ORL 123
          </text>
          <text
            transform="matrix(1.1248 0 0 1 508.1206 356.8508)"
            class="st2 st3 st4"
          >
            ORL 121
          </text>
          <text
            transform="matrix(1.1248 0 0 1 818.425 142.1876)"
            class="st2 st3 st5"
          >
            MCTH 134
          </text>
          <text
            transform="matrix(1.1248 0 0 1 997.4464 234.7238)"
            class="st2 st3 st5"
          >
            MCTH 133
          </text>
          <text
            transform="matrix(1.1248 0 0 1 875.2112 452.2164)"
            class="st2 st3 st5"
          >
            MCTH 137
          </text>
          <text
            transform="matrix(1.1248 0 0 1 12.7224 333.2929)"
            class="st2 st3 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 340.4435 393.33)"
            class="st2 st3 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1077.1044 108.5076)"
            class="st2 st3 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 407.324 304.7175)"
            class="st2 st3 st6"
            fontSize={".9rem"}
          >
            Bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 663.1348 336.7411)"
            class="st2 st3 st7"
            fontSize={".8rem"}
          >
            Elevator
          </text>
          <text
            transform="matrix(1.1248 0 0 1 771.9283 321.0338)"
            class="st2 st3 st7"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 349.3354 446.1143)"
            class="st2 st3 st8"
          >
            Exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 771.9286 467.0031)"
            class="st2 st3 st8"
          >
            Exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 430.643 411.3728)"
            class="st2 st3 st9"
          >
            Lab
          </text>
          <path class="st1" className="extras" d="M927.65,358.27" />
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

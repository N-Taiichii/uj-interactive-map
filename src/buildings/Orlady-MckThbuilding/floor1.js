import React from "react";
import { useState } from "react";

import Room022 from "./room22";
import Room026 from "./room26";
import Room034 from "./room34";
import Room035 from "./room35";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor1 = () => {
  const [room, setRoom] = useState(<Room022 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "ORL022") {
      setRoom(<Room022 />);
    } else if (click === "ORL026") {
      setRoom(<Room026 />);
    } else if (click === "MCTH034") {
      setRoom(<Room034 />);
    } else {
      setRoom(<Room035 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="OrladyMckth_Floor1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1177.98 586.88"
        >
          <path
            class="st0"
            className="hallways"
            d="M1021.16,36.61l44.59,23.43l-24.95,47.47l-8.65-4.55L818.94,508.65l-106.19-66.1l-48.09-0.47v-59.78l64.89,0
	v-72.67h-64.89v-30.22l-259.11,0l0,79.11h-74.22v-79.11l-255.56,0l0-29.33v-9.78h135.11H538h99.56h88.76l25.39,14.76l-3.73,7.09
	l46.16,24.26l10.58-20.13l75.01,39.42L1021.16,36.61z"
          />
          <path
            class="st0"
            className="exits"
            d="M331.34,462.52l0-44.88h74.22v44.56L331.34,462.52z"
          />
          <path
            class="st0"
            className="extras"
            id="ORL024"
            d="M331.34,462.52H210.89l0-183.1l120.45,0v79.11L331.34,462.52z"
          />
          <path
            class="st0"
            className="classrooms"
            id="ORL026"
            onClick={roomHandler}
            d="M210.89,279.42l0,183.1h-12.44l0,16.9H97.11v-16.89H75.78l0-56.89l0-126.22L210.89,279.42z"
          />
          <path
            class="st0"
            className="extras"
            d="M75.78,405.64l-73.78,0l0-155.56h73.78l0,29.33L75.78,405.64z"
          />
          <path
            class="st0"
            className="extras"
            d="M106,199.42h40.44v40.89H106L106,199.42z"
          />
          <path
            class="st0"
            className="extras"
            d="M146.44,199.42l64.44,0l0,40.89l-64.44,0V199.42z"
          />
          <path
            class="st0"
            className="classrooms"
            id="ORL022"
            onClick={roomHandler}
            d="M405.56,358.53l0-79.11l259.11,0v162.67h-5.78v19.56h-19.56v16l-105.78,0v-16l-128,0V358.53z"
          />
          <path
            class="st0"
            className="extras"
            d="M538,204.97l99.56,0v35.56l-99.56,0V204.97z"
          />
          <path
            class="st0"
            className="extras"
            d="M664.67,309.64h64.89v72.67l-64.89,0V309.64z"
          />
          <path class="st0" className="extras" d="M875.78,201.49" />
          <path class="st0" className="extras" d="M703.33,165.34" />
          <path class="st0" className="extras" d="M726.89,528.75" />
          <path
            class="st0"
            className="extras"
            d="M821.56,503.67l17.89-34.03l143.7,75.52l-20.5,39.02l-143.7-75.52L821.56,503.67z"
          />
          <path
            class="st0"
            className="extras"
            d="M839.45,469.64l32.05-60.98l143.7,75.52l-32.05,60.98L839.45,469.64z"
          />
          <path
            class="st0"
            className="extras"
            d="M891.75,370.11l143.7,75.52l-20.26,38.55l-143.7-75.52L891.75,370.11z"
          />
          <path
            class="st0"
            className="extras"
            d="M891.75,370.11l26.68-50.76l143.7,75.52l-26.68,50.76L891.75,370.11z"
          />
          <path
            class="st0"
            className="extras"
            d="M1088.22,347.86l60.57,31.84l-51.69,98.34l-61.66-32.41L1088.22,347.86z"
          />
          <path
            class="st0"
            className="extras"
            d="M1063.21,395.45l-144.78-76.09l25.01-47.58l144.78,76.09L1063.21,395.45z"
          />
          <path
            class="st0"
            className="classrooms"
            id="MCTH034"
            onClick={roomHandler}
            d="M943.44,271.77l88.71-168.8l143.12,75.22l-88.71,168.8L943.44,271.77z"
          />
          <path
            class="st0"
            className="extras"
            d="M1040.8,107.52l24.95-47.47l96.52,50.73l-24.95,47.47L1040.8,107.52z"
          />
          <path
            class="st0"
            className="exits"
            d="M1065.75,60.04l-44.59-23.43l11.85-22.56l44.59,23.43L1065.75,60.04z"
          />
          <path
            class="st0"
            className="extras"
            d="M1005.17,67.03l-27.91-14.67L970.09,66l-36.61-19.24L956.64,2.7l64.52,33.91L1005.17,67.03z"
          />
          <path
            class="st0"
            className="classrooms"
            id="MCTH035"
            onClick={roomHandler}
            d="M1005.17,67.03L905.65,256.4l-131.14-68.92l92.36-175.73l66.62,35.01L970.09,66l7.17-13.64L1005.17,67.03z"
          />
          <path
            class="st0"
            className="bathrooms"
            d="M905.65,256.4l-25.91,49.31l-75.01-39.42l-10.58,20.13l-46.16-24.26l10.58-20.13l-9.97-5.24l25.91-49.31
	L905.65,256.4z"
          />
          <path
            class="st0"
            className="extras"
            d="M794.21,286.82l65.19,34.55l-27.58,52.03l-65.19-34.55L794.21,286.82z"
          />
          <text
            transform="matrix(1.1248 0 0 1 468.3941 370.9688)"
            class="st1 st2 st3"
          >
            ORL 022
          </text>
          <text
            transform="matrix(1.1248 0 0 1 221.5892 370.1123)"
            class="st1 st2 st4"
          >
            ORL 024
          </text>
          <text
            transform="matrix(1.1248 0 0 1 91.281 370.1123)"
            class="st1 st2 st4"
          >
            ORL 026
          </text>
          <text
            transform="matrix(1.1248 0 0 1 10.8436 329.0804)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 788.9796 333.6069)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 766.6359 256.4006)"
            class="st1 st2 st7"
          >
            Bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 813.0179 148.5224)"
            class="st1 st2 st8"
          >
            MCTH 035
          </text>
          <text
            transform="matrix(1.1248 0 0 1 983.1439 229.3706)"
            class="st1 st2 st3"
          >
            MCTH 034
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1070.6807 109.1438)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 349.8916 445.6346)"
            class="st1 st2 st5"
          >
            Exit
          </text>
          <path class="st0" d="M331.34,358.53h74.22v59.11h-74.22V358.53z" />
          <text
            transform="matrix(1.1248 0 0 1 339.7218 392.1434)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 671.2132 346.9902)"
            class="st1 st2 st9"
            fontSize={"0.8rem"}
          >
            Elevator
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1062.1285 22.7912)"
            class="st1 st2 st5"
          >
            Exit
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

export default Floor1;

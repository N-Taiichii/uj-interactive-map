import React from "react";
import { useState } from "react";

import Room206 from "./room206";
import Room207 from "./room207";
import Room214 from "./room214";
import Room217 from "./room217";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor2 = () => {
  const [room, setRoom] = useState(<Room206 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "LYNG206") {
      setRoom(<Room206 />);
    } else if (click === "LYNG207") {
      setRoom(<Room207 />);
    } else if (click === "LYNG214") {
      setRoom(<Room214 />);
    } else {
      setRoom(<Room217 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Lyngstad_Floor2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1013.88 711.41"
        >
          <path
            class="st0"
            className="extras"
            d="M1011.88,516.81h-29.63h-50.01V355.7h79.64V516.81z"
          />
          <path
            class="st0"
            className="extras"
            d="M932.23,471.91h-82.37v-58.67h82.37V471.91z"
          />
          <path
            class="st0"
            className="extras"
            d="M932.23,516.81h50.01v164.2H793.36v-164.2H932.23z"
          />
          <path
            class="st0"
            className="extras"
            d="M1011.88,289.4h-96.23V188.42h65.37h30.86V289.4z"
          />
          <path
            class="st0"
            className="extras"
            d="M915.64,289.4h-97.19V188.42h97.19V289.4z"
          />
          <path
            class="st0"
            className="bathrooms"
            d="M835.64,110.64c-14.92,0-29.84,0-44.75,0V32.86h190.12v155.56H835.64
	C835.64,162.49,835.64,136.57,835.64,110.64z"
          />
          <path
            class="st0"
            className="classrooms"
            id="LYNG206"
            onClick={roomHandler}
            d="M790.89,2v256.58h-68.43v30.81H595.83V2H790.89z"
          />
          <path
            class="st0"
            className="classrooms"
            id="LYNG207"
            onClick={roomHandler}
            d="M595.83,289.4H472.98v-27.85h-63.41V2h186.26V289.4z"
          />
          <path
            class="st0"
            className="offices"
            d="M409.57,289.4H144.09V188.42h72.73V36.57V2h192.75v259.54V289.4z"
          />
          <path
            class="st0"
            className="labs"
            d="M36.57,188.42V36.57h180.25v151.85H36.57z"
          />
          <path
            class="st0"
            className="offices"
            d="M2,188.42h99.42V289.4H2V188.42z"
          />
          <path
            class="st0"
            className="extras"
            d="M80.09,355.7v161.11H31.63H2V355.7H80.09z"
          />
          <path
            class="st0"
            className="offices"
            d="M31.63,588.06h93.49V355.7h86.75v315.43H31.63V588.06z"
          />
          <path
            class="st0"
            className="offices"
            d="M333.27,355.7h94.22v248.8h-94.22V355.7z"
          />
          <path
            class="st0"
            className="offices"
            d="M211.88,413.4h83.17v191.11h-83.17V413.4z"
          />
          <path
            class="st0"
            className="extras"
            d="M211.88,604.51h83.17v104.9h-83.17V604.51z"
          />
          <path
            class="st0"
            className="extras"
            d="M427.49,604.51v69.78h-19.11v35.12H295.05v-78.68h66.22v-26.22H427.49z"
          />
          <path
            class="st0"
            className="classrooms"
            id="LYNG217"
            onClick={roomHandler}
            d="M793.36,681.01v28.4H595.83V445.84h197.53v70.98V681.01z"
          />
          <path
            class="st0"
            className="classrooms"
            id="LYNG214"
            onClick={roomHandler}
            d="M595.83,709.41H408.38v-35.12h19.11V355.7h45.48v90.14h122.85V709.41z"
          />
          <path
            class="st0"
            className="extras"
            d="M472.98,355.7h77.04v90.14h-77.04V355.7z"
          />
          <path
            class="st0"
            className="offices"
            d="M550.01,355.7h243.35v90.14H550.01V355.7z"
          />
          <path
            class="st0"
            className="hallways"
            d="M101.42,289.4V188.42h42.67V289.4h265.48v-27.85h63.41v27.85h249.48v-30.81h68.43V110.64h44.75v77.78h-17.19
	V289.4h193.42v66.31h-79.64v57.54h-82.37v58.67h82.37v44.9H793.36V355.7H333.27v248.8h28v26.22h-66.22V413.4h-83.17V355.7h-86.75
	v232.36H31.63v-71.25h48.46V355.7H2V289.4H101.42z"
          />
          <text
            transform="matrix(1.1248 0 0 1 58.9502 630.7282)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 595.8272 413.3951)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 243.3945 155.2536)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 343.2361 496.1234)"
            class="st1 st2 st4"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 221.0553 513.4197)"
            class="st1 st2 st5"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 14.3285 247.0358)"
            class="st1 st2 st5"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 10.9054 432.5179)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 942.8554 432.5175)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 863.7054 445.8395)"
            class="st1 st2 st6"
          >
            Elevator
          </text>
          <text
            transform="matrix(1.1248 0 0 1 864.8919 110.642)"
            class="st1 st2 st7"
          >
            Bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 626.5197 577.623)"
            class="st1 st2 st3"
          >
            LYNG 217
          </text>
          <text
            transform="matrix(1.1248 0 0 1 620.3555 155.2533)"
            class="st1 st2 st3"
          >
            LYNG 206
          </text>
          <text
            transform="matrix(1.1248 0 0 1 432.8356 155.2529)"
            class="st1 st2 st3"
          >
            LYNG 207
          </text>
          <text
            transform="matrix(1.1248 0 0 1 440.0926 577.6229)"
            class="st1 st2 st3"
          >
            LYNG 214
          </text>
          <text
            transform="matrix(1.1248 0 0 1 97.096 122.1106)"
            class="st1 st2 st3"
          >
            Lab
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

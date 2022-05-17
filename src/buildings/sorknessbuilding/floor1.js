import React from "react";
import { useState } from "react";

import Room101A from "./room101A";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor1 = () => {
  const [room, setRoom] = useState(<Room101A />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room101A") {
      setRoom(<Room101A />);
    }
  };

  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Sorkness_Floor1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1398.23 502.47"
        >
          <rect
            x="541.56"
            y="29.92"
            class="st0"
            className="exits"
            width="129.78"
            height="72"
          />
          <rect
            x="541.56"
            y="409.48"
            class="st0"
            className="exits"
            width="129.78"
            height="72"
          />
          <polygon
            class="st0"
            id={"room101A"}
            onClick={roomHandler}
            className="classrooms"
            points="541.56,409.48 541.56,481.48 103.33,481.48 103.33,285.92 479.33,285.92 479.33,409.48 "
          />
          <rect
            x="103.33"
            y="29.92"
            class="st0"
            className="labs"
            width="438.22"
            height="256"
          />
          <polygon
            class="st0"
            className="offices"
            points="671.33,481.48 671.33,409.48 671.33,280.59 1090.89,280.59 1090.89,481.48 "
          />
          <polygon
            class="st0"
            className="bathrooms"
            points="671.33,29.92 671.33,101.92 671.33,153.48 757.56,153.48 757.56,221.03 799.33,221.03 799.33,29.92 "
          />
          <polyline
            class="st0"
            className="extras"
            points="799.33,29.92 922.89,29.92 922.89,221.03 799.33,221.03 "
          />
          <rect
            x="922.89"
            y="29.92"
            class="st0"
            className="offices"
            width="276.44"
            height="191.11"
          />
          <rect
            x="2"
            y="285.92"
            class="st0"
            className="extras"
            width="101.33"
            height="195.56"
          />
          <path
            class="st0"
            className="extras"
            d="M2,29.92h101.33v256H2V29.92z"
          />
          <rect
            x="541.56"
            y="125.48"
            class="st0"
            className="extras"
            width="59.11"
            height="95.56"
          />
          <rect
            x="671.33"
            y="153.48"
            class="st0"
            className="extras"
            width="86.22"
            height="67.56"
          />
          <rect
            x="1090.89"
            y="280.59"
            class="st0"
            className="extras"
            width="108.44"
            height="200.89"
          />
          <text
            transform="matrix(1.1248 0 0 1 833.5117 383.6978)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 995.3323 144.8143)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 677.0155 194.0926)"
            class="st1 st2 st4"
          >
            Elevator
          </text>
          <text
            transform="matrix(1.1248 0 0 1 546.8445 179.0991)"
            class="st1 st2 st5"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1108.4391 383.6982)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 14.9452 381.0311)"
            class="st1 st2 st6"
          >
            Stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 521.2834 14.8749)"
            class="st1 st2 st6"
          >
            Exit to Campus
          </text>
          <text
            transform="matrix(1.1248 0 0 1 417.8456 499.2795)"
            class="st1 st2 st6"
          >
            Exit to South University Drive
          </text>
          <polygon
            class="st0"
            className="hallways"
            points="1199.33,280.59 1199.33,221.03 671.33,221.03 671.33,101.92 541.56,101.92 541.56,125.48 
	600.67,125.48 600.67,221.03 541.56,221.03 541.56,285.92 479.33,285.92 479.33,409.48 671.33,409.48 671.33,280.59 "
          />
          <rect
            x="1199.33"
            y="221.03"
            class="st0"
            className="extend"
            width="86.22"
            height="59.56"
          />
          <text
            transform="matrix(1.1248 0 0 1 1209.3289 296.062)"
            class="st1 st2 st7"
          >
            To Sorkness Extension
          </text>
          <text
            transform="matrix(1.1248 0 0 1 207.8632 383.6978)"
            class="st1 st2 st3"
          >
            SORK 101A
          </text>
          <text transform="matrix(1.1248 0 0 1 700.2064 100.5571)">
            <tspan x="0" y="0" class="st1 st2 st8">
              Womens
            </tspan>
            <tspan x="-10.41" y="20.68" class="st1 st2 st8">
              Bathroom
            </tspan>
          </text>
          <text
            transform="matrix(1.1248 0 0 1 210.8445 173.5523)"
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

export default Floor1;

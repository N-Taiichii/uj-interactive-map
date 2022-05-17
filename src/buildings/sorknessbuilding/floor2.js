import React from "react";
import { useState } from "react";

import Room201A from "./room201A";
import Room201B from "./room201B";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor2 = () => {
  const [room, setRoom] = useState(<Room201A />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room201A") {
      setRoom(<Room201A />);
    } else {
      setRoom(<Room201B />);
    }
  };

  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Sorkness_Floor2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1201.33 455.56"
        >
          <path
            class="st0"
            className="extras"
            d="M557.45,2h124v158.65h-124V2z"
          />
          <path
            class="st0"
            className="extras"
            d="M681.45,135.31h88v64h-88v-38.67V135.31z"
          />
          <path
            class="st0"
            className="bathrooms"
            d="M769.45,135.31h-88V2h132v197.31h-44V135.31z"
          />
          <path
            class="st0"
            className="extras"
            d="M813.45,2h130.67v197.31H813.45V2z"
          />
          <path
            class="st0"
            className="labs"
            d="M944.11,2h255.22v197.31H944.11V2z"
          />
          <path
            class="st0"
            className="extras"
            d="M1199.33,453.56h-93.89V272.65h93.89V453.56z"
          />
          <path
            class="st0"
            className="labs"
            d="M1105.45,453.56h-292V272.65h292V453.56z"
          />
          <path
            class="st0"
            className="extras"
            d="M813.45,453.56H712.11V272.65h101.33V453.56z"
          />
          <path
            class="st0"
            className="extras"
            d="M712.11,453.56H522.78V272.65h189.33V453.56z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room201A"
            onClick={roomHandler}
            d="M522.78,453.56H109.45V272.65h413.33V453.56z"
          />
          <path
            class="st0"
            className="classrooms"
            id="room201B"
            onClick={roomHandler}
            d="M557.45,160.65v38.67h-448V2h448V160.65z"
          />
          <path
            class="st0"
            className="extras"
            d="M109.45,199.31H2V2h107.45V199.31z"
          />
          <path
            class="st0"
            className="extras"
            d="M109.45,453.56H2V272.65h107.45V453.56z"
          />
          <path
            class="st0"
            className="hallways"
            d="M2,272.65v-73.33h555.45v-38.67h124v38.67h517.89v73.33H2z"
          />
          <text
            transform="matrix(1.1248 0 0 1 925.4006 363.1012)"
            class="st1 st2 st3"
          >
            Lab
          </text>
          <text
            transform="matrix(1.1248 0 0 1 565.7107 100.6571)"
            class="st1 st2 st3"
          >
            stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 184.8978 372.3901)"
            class="st1 st2 st4"
          >
            SORK 201A
          </text>
          <text
            transform="matrix(1.1248 0 0 1 189.1337 110.5874)"
            class="st1 st2 st4"
          >
            SORK 201B
          </text>
          <text
            transform="matrix(1.1248 0 0 1 10.0333 363.1014)"
            class="st1 st2 st5"
          >
            stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 1105.4482 363.1013)"
            class="st1 st2 st5"
          >
            stairs
          </text>
          <text
            transform="matrix(1.1248 0 0 1 959.4479 118.5675)"
            class="st1 st2 st4"
          >
            Lab
          </text>
          <text
            transform="matrix(1.1248 0 0 1 686.448 174.4204)"
            class="st1 st2 st7"
          >
            Elevator
          </text>
          <text transform="matrix(1.1248 0 0 1 723.4866 81.3236)">
            <tspan x="0" y="0" class="st1 st2 st6">
              Mens
            </tspan>
            <tspan x="-21.3" y="21.16" class="st1 st2 st6">
              Bathroom
            </tspan>
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

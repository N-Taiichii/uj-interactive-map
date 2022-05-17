import React from "react";
import { useState } from "react";

import Room123 from "./room123";
import Room143 from "./room143";
import Room152 from "./room152";
import Room156 from "./room156";
import Room157 from "./room157";
import Auditorium from "./auditorium";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor1 = () => {
  const [room, setRoom] = useState(<Room123 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "room123") {
      setRoom(<Room123 />);
    } else if (click === "room143") {
      setRoom(<Room143 />);
    } else if (click === "room152") {
      setRoom(<Room152 />);
    } else if (click === "room156") {
      setRoom(<Room156 />);
    } else if (click === "room157") {
      setRoom(<Room157 />);
    } else {
      setRoom(<Auditorium />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Reiland_Floor1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 788 611.11"
        >
          <path
            class="st0"
            className="hallways"
            d="M328.74,58.89h120.89v-3.56h270.22v22.22h61.33c23.11,208-44.44,285.33-44.44,285.33l9.78,9.78l-37.33,54.22
	l-36.44-30.22h-57.78L590.07,434h-24.44v-31.33h-44.89v60.89h-33.33v86.22H292.3v6h-14.78V504h39.11V403.78H162.52H71.3V370h29.89
	v9.78h34.07v-6.22h495.7c152.89-163.56,0-297.78,0-297.78h-272v5.33h-30.22V58.89z"
          />
          <rect
            x="584.22"
            y="2"
            class="st0"
            width="136"
            height="53.33"
            className="bathrooms"
          />
          <path
            class="st0"
            className="classrooms"
            id="auditorium"
            onClick={roomHandler}
            d="M631.33,373.56h-272V75.78h272C783.78,228.22,631.33,373.56,631.33,373.56z"
          />
          <polygon
            class="st0"
            id={"room123"}
            onClick={roomHandler}
            className="classrooms"
            points="618,434 618,558.44 508.67,558.44 508.67,549.78 487.78,549.78 487.78,463.56 521.11,463.56 
	521.11,402.67 566,402.67 566,434 "
          />
          <polygon
            class="st0"
            className="bathrooms"
            points="444.67,423.04 459.48,423.04 459.48,397.56 398.44,397.56 398.44,442 424.52,442 424.52,431.78 
	444.83,431.78 "
          />
          <polygon
            class="st0"
            className="bathrooms"
            points="389.78,449.33 445.33,449.33 445.33,465.11 459.48,465.11 459.48,494.44 389.78,494.44 "
          />
          <rect
            x="292.67"
            y="549.78"
            class="st0"
            width="216"
            height="59.33"
            className="offices"
          />
          <path class="st0" d="M558.15,579.44" />
          <rect
            x="338"
            y="494.44"
            class="st0"
            width="121.48"
            height="30.22"
            className="extras"
          />
          <polygon
            class="st0"
            className="extras"
            points="444.83,431.78 444.83,449.33 389.78,449.33 389.78,442 424.52,442 424.52,431.78 "
          />
          <rect
            x="338"
            y="442"
            class="st0"
            width="51.78"
            height="52.44"
            className="extras"
          />
          <rect
            x="363.89"
            y="397.56"
            class="st0"
            width="34.56"
            height="44.44"
            className="extras"
          />
          <rect
            x="338"
            y="397.56"
            class="st0"
            width="25.89"
            height="44.44"
            className="extras"
          />
          <path
            class="st0"
            d="M317,438h-39.11v-35.56H317V438z"
            className="extras"
          />
          <path
            class="st0"
            d="M317,438v32.22h-39.11V438H317z"
            className="extras"
          />
          <path
            class="st0"
            d="M317,470.22V504h-39.11v-33.78H317z"
            className="extras"
          />
          <path
            class="st0"
            d="M277.56,567.33H162.89V402.67h114.67V567.33z"
            className="classrooms"
            id={"room143"}
            onClick={roomHandler}
          />
          <rect
            x="229.56"
            y="81.11"
            class="st0"
            width="129.78"
            height="122.67"
            className="extras"
          />
          <rect
            x="229.56"
            y="203.78"
            class="st0"
            width="129.78"
            height="169.78"
            id={"room157"}
            onClick={roomHandler}
            className="classrooms"
          />
          <path
            class="st0"
            d="M229.56,373.56h-93.93V265h93.93V373.56z"
            id={"room152"}
            onClick={roomHandler}
            className="classrooms"
          />
          <path
            class="st0"
            d="M71.33,382.44H2V265h99.56v105H71.67L71.33,382.44z"
            id={"room156"}
            onClick={roomHandler}
            className="classrooms"
          />
          <path
            class="st0"
            d="M101.56,379.78V265h34.07v114.78H101.56z"
            className="extras"
          />
          <rect
            x="358.44"
            y="27.78"
            class="st0"
            width="91.56"
            height="31.11"
            className="extras"
          />
          <path
            class="st0"
            d="M162.89,403.78v81.78H35.78v-81.78H162.89z"
            className="offices"
          />

          <text
            transform="matrix(1.1248 0 0 1 451.5992 237.2054)"
            class="st1 st2 st3"
          >
            Auditorium
          </text>
          <text
            transform="matrix(1.1248 0 0 1 539.4421 480.5555)"
            class="st1 st2 st4"
          >
            ART 123
          </text>
          <text
            transform="matrix(1.1248 0 0 1 262.6003 281.5741)"
            class="st1 st2 st4"
          >
            ART 157
          </text>
          <text
            transform="matrix(1.1248 0 0 1 149.3497 323.0734)"
            class="st1 st2 st4"
          >
            ART 152
          </text>
          <text
            transform="matrix(1.1248 0 0 1 13.0669 334.5073)"
            class="st1 st2 st4"
          >
            ART 156
          </text>
          <text
            transform="matrix(1.1248 0 0 1 186.2427 484.3575)"
            class="st1 st2 st4"
          >
            ART 143
          </text>
          <path
            class="st0"
            d="M71.3,403.78H56.81v-21.33h14.52L71.3,403.78z"
            className="exits"
          />
          <path
            class="st0"
            d="M328.74,81.11H317V58.89h11.74V81.11z"
            className="exits"
          />
          <path
            class="st0"
            d="M719.85,77.56V55.33h61.33v22.22H719.85z"
            className="exits"
          />
          <path
            class="st0"
            d="M639.63,396.67L618,434h-27.93l24.89-37.33H639.63z"
            className="exits"
          />
          <text
            transform="matrix(1.1248 0 0 1 14.6571 397.5556)"
            class="st1 st2 st4"
          >
            exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 632.333 420.2223)"
            class="st1 st2 st4"
          >
            exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 731.4447 48.3916)"
            class="st1 st2 st4"
          >
            exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 605.2678 38.7199)"
            class="st1 st2 st4"
          >
            bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 351.7937 583.3018)"
            class="st1 st2 st6"
          >
            offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 51.5711 453.9467)"
            class="st1 st2 st6"
          >
            offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 371.6856 48.3915)"
            class="st1 st2 st4"
          >
            stairs
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

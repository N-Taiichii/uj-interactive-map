import React from "react";
import { useState } from "react";

import Room116 from "./room116";
import Room121 from "./room121";
import Room122 from "./room122";

import "../../assets/floorplans.css";
import "../../assets/floor.css";

const Floor1 = () => {
  const [room, setRoom] = useState(<Room116 />);

  const roomHandler = (event) => {
    const click = event.target.id;

    if (click === "FOSS116") {
      setRoom(<Room116 />);
    } else if (click === "FOSS121") {
      setRoom(<Room121 />);
    } else {
      setRoom(<Room122 />);
    }
  };
  return (
    <div className="floor">
      <div className="svg-container">
        <svg
          version="1.1"
          id="Foss_Floor1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 987.5 747.97"
        >
          <path
            class="st0"
            className="exits"
            d="M443.87,706.76h65.19v39.7h-65.19V706.76z"
          />
          <path
            class="st0"
            className="offices"
            d="M39.72,84.24h72.89v75.56H39.72V84.24z"
          />
          <path
            class="st0"
            className="labs"
            d="M112.61,159.8h123.26v346.07h21.33v33.78l-20.44,20.44v186.37H39.72V520.69H1.5V222.02h38.22V159.8H112.61z"
          />
          <path
            class="st0"
            className="bathrooms"
            d="M235.87,159.8V84.24h126.81v271.7H235.87V159.8z"
          />
          <path
            class="st0"
            className="extras"
            d="M443.87,355.95v149.93H257.2h-21.33V355.95h126.81H443.87z"
          />
          <path
            class="st0"
            className="extras"
            d="M443.87,505.87v240.59H236.76V560.09l20.44-20.44v-33.78H443.87z"
          />
          <rect
            x="362.69"
            y="188.84"
            class="st0"
            className="offices"
            width="81.19"
            height="167.11"
          />
          <path
            class="st0"
            className="extras"
            d="M362.69,188.84V84.24h81.19v104.59H362.69z"
          />
          <path
            class="st0"
            className="classrooms"
            id="FOSS116"
            onClick={roomHandler}
            d="M672.61,247.5H509.06V91.35h163.56V247.5z"
          />
          <path
            class="st0"
            className="extras"
            d="M672.61,247.5v133.93H509.06V247.5H672.61z"
          />
          <path
            class="st0"
            className="classrooms"
            id="FOSS121"
            onClick={roomHandler}
            d="M672.61,381.43v203.85H509.06V381.43H672.61z"
          />
          <path
            class="st0"
            className="classrooms"
            id="FOSS122"
            onClick={roomHandler}
            d="M672.61,585.28v161.19H509.06V585.28H672.61z"
          />
          <path
            class="st0"
            className="exits"
            d="M820.17,91.35h-33.78V41.58h33.78V91.35z"
          />
          <path
            class="st0"
            className="exits"
            d="M39.72,27.35h72.89v56.89H39.72V27.35z"
          />
          <path
            class="st0"
            className="extras"
            d="M236.76,746.47H39.72v-86.52h196.15L236.76,746.47z"
          />
          <path
            class="st0"
            className="exits"
            d="M663.28,41.58V18.91h38.22v22.67H663.28z"
          />
          <path
            class="st0"
            className="hallways"
            d="M112.61,159.8V27.35H593.5v14.22h192.89v49.78H509.06v615.41h-65.19V84.24h-208v75.56H112.61z"
          />
          <text
            transform="matrix(1.1248 0 0 1 366.9424 272.3911)"
            class="st1 st2 st3"
          >
            Offices
          </text>
          <text
            transform="matrix(1.1248 0 0 1 253.3222 226.9771)"
            class="st1 st2 st4"
          >
            Bathrooms
          </text>
          <text
            transform="matrix(1.1248 0 0 1 50.8819 122.0208)"
            class="st1 st2 st5"
          >
            Offices
          </text>
          <text transform="matrix(1.1248 0 0 1 31.3757 355.9467)">
            <tspan x="0" y="0" class="st1 st2 st6">
              Foss Wellness
            </tspan>
            <tspan x="43.56" y="24.73" class="st1 st2 st6">
              Center
            </tspan>
          </text>
          <text
            transform="matrix(1.1248 0 0 1 522.4658 191.021)"
            class="st1 st2 st7"
          >
            FOSS 116
          </text>
          <text
            transform="matrix(1.1248 0 0 1 528.0592 483.3543)"
            class="st1 st2 st7"
          >
            FOSS 121
          </text>
          <text
            transform="matrix(1.1248 0 0 1 525.2625 665.8729)"
            class="st1 st2 st7"
          >
            FOSS 122
          </text>
          <text
            transform="matrix(1.1248 0 0 1 52.1147 61.8716)"
            class="st1 st2 st8"
          >
            Exit
          </text>
          <text
            transform="matrix(1.1248 0 0 1 664.2778 11.452)"
            class="st1 st2 st9"
          >
            Exit
          </text>
          <text transform="matrix(1.1248 0 0 1 827.0866 61.8714)">
            <tspan x="0" y="0" class="st1 st2 st9">
              To Larson Center{" "}
            </tspan>
            <tspan x="0" y="16.67" class="st1 st2 st9">
              and Newman Arena
            </tspan>
          </text>
          <text
            transform="matrix(1.1248 0 0 1 450.5 733.5344)"
            class="st1 st2 st8"
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

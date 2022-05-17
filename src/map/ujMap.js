import React, { useState } from "react";

import Popup from "./popup";

import "./ujMap.css";

const UjMap = () => {
  const [isShown, setIsShown] = useState("");

  const mouseEnterHandler = (event) => {
    setIsShown(event.target.id);
  };
  const mouseLeaveHandler = () => {
    setIsShown("");
  };

  return (
    <div className="map">
      <Popup name={isShown} />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
      >
        <g id="Extra">
          <rect
            x="1156.7"
            y="527.96"
            class="turf"
            fill="#009444"
            width="180.59"
            height="75.41"
          />
          <polygon
            class="allenField"
            fill="#009444"
            points="732.81,605.8 825.56,508.68 937.15,604.56 943.07,656.26 882.77,729.22 	"
          />
          <path class="st1" d="M1109.89,958.78" />
          <path
            class="hansenStadium--outer"
            fill="#656666"
            d="M1044.03,1017.99L1044.03,1017.99c-22.01-2.58-37.77-22.51-35.2-44.52l16.98-145.12
		c2.58-22.01,22.51-37.77,44.52-35.2h0c22.01,2.58,37.77,22.51,35.2,44.52l-16.98,145.12
		C1085.97,1004.81,1066.04,1020.57,1044.03,1017.99z"
          />
          <path
            class="hansenStadium--inner"
            fill="#009444"
            d="M1044.57,1013.32L1044.57,1013.32c-19.22-2.25-32.97-19.65-30.72-38.86l17.09-146.06
		c2.25-19.22,19.65-32.97,38.86-30.72l0,0c19.22,2.25,32.97,19.65,30.72,38.86l-17.09,146.06
		C1081.19,1001.81,1063.79,1015.57,1044.57,1013.32z"
          />
          <path
            class="buildings"
            id="Wilson Memorial"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            d="M721.28,727.07l56.02,44.72C777.3,771.79,701.41,804.11,721.28,727.07z"
          />
          <rect
            fill="#D3D3D3"
            x="616.56"
            y="93.59"
            class="parking"
            width="47.56"
            height="57.04"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M563.52,346.33c25.09-26.81,50.17-53.63,75.26-80.44c16.44,15.19,32.89,30.37,49.33,45.56
		c-24.1,26.64-48.2,53.28-72.3,79.93C598.38,376.36,580.95,361.35,563.52,346.33z"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="534.56,376.19 530.47,530.93 545.59,622.19 656.98,664.79 660.78,654.11 585.89,625.15 585.89,596.41 
		559.81,596.41 559.81,551.67 551.22,551.67 551.22,520.85 570.75,420.73 	"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="684.11,560.26 661.6,585.89 657.13,581.42 624.22,622.67 640.56,636.11 672.78,595.67 669.67,592.89 
		690.73,568.41 	"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M670.07,528.8l67.38-67.8l-8.3-13.33l13.93-17.04c0,0,14.67,8.44,18.52,4.59c3.85-3.85,8.9-9.62,8.9-9.62
		l19.1,16.73l7.33,7.33L749.3,497.3l-13.76,11.39l-37.06,37.06l-8.38,7.77L670.07,528.8z"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="777.44,244.11 745.79,274.22 821.52,348.41 889.4,277.4 	"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="877.3,304.68 935.89,357 909.3,385 866.93,346.78 850.81,331.92 	"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="950.81,377.52 1037,455.44 1001.44,500.5 911.86,418.31 	"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="1046.33,251.22 1046.33,338.63 1106.19,338.63 1138.19,338.63 1138.19,434.37 1129.89,434.32 
		1129.59,419.5 1057.68,412.85 1025.59,342.8 1025.59,251.22 	"
          />
          <rect
            x="1257.89"
            y="246.78"
            class="parking"
            fill="#D3D3D3"
            width="61.04"
            height="157.63"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M1341.44,444.7v81.78h112c0,0-2.96-71.41-74.07-72.3l-28.44-0.3v-9.78L1341.44,444.7z"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M1081.89,462.03l0.59,87.56l-39.71-0.23v-56.79c6.15-7.39,12.3-14.78,18.45-22.17
		c2.44-0.29,5.36-0.85,8.56-1.93C1075.13,466.67,1079.17,464.1,1081.89,462.03z"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="1008.66,533.05 1027.11,549 992.89,589.39 974.49,573.6 	"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M948.25,725.04l17.66,15.5c0,0-8.36,14.52-18.64,16.31l-14.75-13.24L948.25,725.04z"
          />
          <polygon
            class="parking"
            fill="#D3D3D3"
            points="913.88,773.82 960,809.22 942.11,833.22 904.39,806.51 	"
          />
          <path
            class="parking"
            fill="#D3D3D3"
            d="M1026.56,621.22l16,2.44l-8,37.56l18.44,10.37l-15.78,26l-9.33-6.15l-9.04,16.59l52.52,28.44
		c0,0,73.19,25.79,134.07,25.26v47.48l20.44,87.11c0,0-26.67,62.11-59.11,88.72l-18.02-161.83l-17.09-49.4l-54.9-21.04l-103.1-32
		l14.89-21.22l22-31.44L1026.56,621.22z"
          />
          <rect
            x="1280.41"
            y="404.41"
            class="parking"
            fill="#D3D3D3"
            width="16"
            height="34.6"
          />
          <path
            class="soccerField"
            fill="#009444"
            d="M850.24,178.02H702.02c-12.94,0-23.43-10.49-23.43-23.43V98.87c0-12.94,10.49-23.43,23.43-23.43h148.22
		c12.94,0,23.43,10.49,23.43,23.43v55.72C873.67,167.54,863.18,178.02,850.24,178.02z"
          />
          <text
            transform="matrix(0.7547 0.6561 -0.6561 0.7547 796.926 625.148)"
            class="label"
          >
            Allen Field
          </text>
          <text transform="matrix(1 0 0 1 742.8809 129.7245)" class="label">
            Soccer Field
          </text>
          <text transform="matrix(1 0 0 1 1225.1453 572.3774)" class="label">
            Turf Field
          </text>
          <text transform="matrix(1 0 0 1 1035.8494 899.5688)">
            <tspan x="-10" y="0" class="label">
              Hansen
            </tspan>
            <tspan x="-45.2" y="16.72" class="label">
              {" "}
            </tspan>
            <tspan x="-15" y="16.72" class="label">
              Stadium
            </tspan>
          </text>
        </g>
        <g id="Buildings">
          <path
            class="buildings"
            id="Reiland Fine Arts Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            d="M551.22,551.67v-30.81c0,0,55.7-5.63,59.85,9.19v13.93h16.89V557h5.63v28.15h-8v17.78h-9.19v14.52h-12.74v7.7
		h-17.78v-28.74h-26.07v-44.74H551.22z"
          />
          <polygon
            class="buildings"
            id="Unruh and Sheldon Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="617,392.11 636.11,392.11 636.11,413.44 688.78,413.44 688.78,439.22 622.11,439.22 622.11,429.4 
		617,429.4 	"
          />
          <polygon
            class="buildings"
            id="Prentice Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="666.56,390.11 640.56,367.22 703.44,297.22 730.58,322.33 708.33,348.11 718.33,356.33 703.89,371.89 
		693,363 	"
          />
          <polygon
            class="buildings"
            id="Seibold Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="729.15,335.81 789.15,393.74 818.33,364.11 757.59,306.19 	"
          />
          <polygon
            class="buildings"
            id="Nierling Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="845.3,369.89 866.93,346.78 909.3,385 888.11,408.26 	"
          />
          <polygon
            class="buildings"
            id="Wilson Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="838.33,380.41 819.22,401.44 862.04,439.52 880.56,417 	"
          />
          <polygon
            class="buildings"
            id="Badal Nafus Student Center / Lyngstad Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="814.78,417.15 789.59,442.33 796.93,449.67 749.3,497.3 778.63,526.63 798.56,506.7 805.22,513.37 
		814.93,503.67 807.59,496.33 852.33,451.59 816.41,415.67 	"
          />
          <polygon
            class="buildings"
            id="Voorhees Chapel"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="735.81,508.41 698.48,545.74 712.41,559.67 726.33,545.74 745.96,565.37 769.66,541.66 	"
          />
          <path
            class="buildings"
            id="Raugust Library"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            d="M810.22,550.67c3.72,3.35,7.44,6.7,11.15,10.05c2.1-2.54,4.19-5.07,6.29-7.61l15.67,12.25l16.9-19.48
		L907,584.67l-18.44,22l-19.9-14.78l-6.21,7.22l-12.11-9.72l-15,15.72l-41.89-34.44L810.22,550.67z"
          />
          <path
            class="buildings"
            id="Kroeze Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            d="M882.77,496.56l-7.57-6.97l31.8-34.15l8.11,7l6.22-7l14.56,11.78l8-8.89l17.67,14.33l-7.78,8.44l33.33,27.78
		l-45.78,55.95c-22.56-19.54-45.11-39.08-67.67-58.62C876.7,503,879.74,499.78,882.77,496.56z"
          />
          <polygon
            class="kroeze--inner"
            fill="#009444"
            points="896.33,506.56 921.22,478.11 962.67,513.44 938.24,542.11 	"
          />
          <path class="st8" d="M917.01,460.31" />
          <polygon
            class="buildings"
            id="Leichty Center / Taber Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="672.78,595.67 695.89,613.44 663.67,654.11 640.56,636.11 	"
          />
          <polygon
            class="buildings"
            id="Watson Hall"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="802.11,726.78 817,707.89 829.67,719.44 835.89,711.44 890.11,755.44 868.66,781.67 	"
          />
          <polygon
            class="buildings"
            id="Sorkness Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="737.5,638.72 789.63,684.16 785.72,690.05 806.17,707.83 794.83,722.05 773.05,704.05 721.28,657.33 	
		"
          />
          <polygon
            class="buildings"
            id="Orlady Center / McKenna Thielsch Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="951.44,606.67 987,602.44 992.11,653.33 1010.56,668.11 988.55,699.56 978.56,692.67 970.78,704.22 
		949.22,685.78 955.56,679.11 947.89,672.56 958.89,659.33 	"
          />
          <polygon
            class="buildings"
            id="Hansen Center"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="936.44,686.89 961.56,709.33 927.11,750 900.67,729.22 	"
          />
          <polygon
            class="buildings"
            id="Physical Plant"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="1018.85,708.04 1027.89,691.44 1037.22,697.59 1053,671.59 1082.85,689.81 1069.22,713.44 
		1080.85,720.04 1071.37,736.48 	"
          />
          <polygon
            class="buildings"
            id="Foss Wellness Center / Larson Center / Newman Arena"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="1030.78,549.3 1030.78,602.44 1152.26,602.44 1152.26,523.22 1337.3,523.22 1337.3,470.93 
		1202.19,470.93 1202.19,504.85 1184.04,504.85 1184.04,470.93 1082.48,470.93 1082.48,549.59 	"
          />
          <polygon
            class="buildings"
            id="Wilson Arena"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            points="1046.33,251.22 1046.33,338.63 1106.19,338.63 1106.19,319.67 1192.7,319.67 1192.7,269.59 
		1103.22,269.59 1103.22,306.19 1088.11,306.19 1088.11,251.22 	"
          />
          <rect
            x="926.93"
            y="104.56"
            class="buildings"
            id="Leichty Apartments"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            width="30.81"
            height="49.78"
          />
          <path
            class="buildings"
            id="University Apartments"
            d="M616.56,60.11h47.56v30.67h-47.56V60.11z"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          />
          <rect
            x="1318.93"
            y="246.78"
            class="buildings"
            id="UJ Place"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            width="55.11"
            height="157.63"
          />
        </g>
        <g id="Roads">
          <polygon
            class="CollegeLane"
            fill="#ED1C24"
            points="466.68,338.35 503.81,338.35 720.7,605.3 726.93,613.89 906.78,761.44 881.59,851.81 983.52,999.07 
		961.78,1049.28 972.56,1049.28 994.48,997.59 892.26,848.26 918.33,758.48 732.56,605.59 726.33,598.19 506.48,327.07 
		466.68,327.07 	"
          />
          <text transform="matrix(1 0 0 1 633.7061 483.8613)" class="st5 st6">
            College Lane
          </text>
          <polygon
            class="SouthUniversityDrive"
            fill="#EC008C"
            points="526.38,366.13 534.56,376.19 530.47,530.93 545.59,622.19 664.11,667.52 884.4,841.73 881.59,851.81 
		658.48,675.22 537,629.3 519.22,530.04 	"
          />
          <text transform="matrix(1 0 0 1 488.7665 671.9178)" class="st5 st11">
            South University Drive
          </text>
          <path
            class="StadiumDrive"
            fill="#9E1F63"
            d="M918.33,758.48c0,0,43.56,13.19,55.33-37.7l140.67,39.24c0,0,32.89,4.54,38,65.65c0,0,17,73.84,14.11,159.62
		l-11.67,7.71c0,0-1.78-105.11-6.67-136.11l-10.22-57.22c0,0-4.44-25.33-33.78-33.33l-123.56-33.78c0,0-10.39,42.29-65.42,36.92
		L918.33,758.48z"
          />
          <path class="st12" d="M924.11,720.78" />
          <text transform="matrix(1 0 0 1 995.0663 771.6371)" class="st5 st6">
            Stadium Drive
          </text>
          <text transform="matrix(1 0 0 1 838.9919 905.5723)" class="st5 st6">
            College Lane
          </text>
          <polygon
            class="westminsterLane"
            fill="#1C75BC"
            points="661.6,666.56 975.22,338.63 981.44,345.44 669.67,671.92 	"
          />
          <text
            transform="matrix(0.6762 -0.7367 0.7367 0.6762 860.2244 495.2077)"
            class="st5 st6"
          >
            Westminster Lane
          </text>
          <polygon
            class="alumniLane"
            fill="#F15A29"
            points="825.56,508.68 833.38,500.5 943.07,597.3 937.15,604.56 	"
          />
          <text
            transform="matrix(0.7547 0.6561 -0.6561 0.7547 868.6501 524.0357)"
            class="st5 st6"
          >
            Alumni Lane
          </text>
          <path
            class="jimmieLane"
            fill="#231F20"
            d="M1083.37,444.11c0,0-6.52,19.56-27.26,17.48L937.15,604.56l5.93,51.7l-60.3,72.96l6.62,5.45l64.79-76.03l-7.41-52.15
		l114.37-135.7c0,0,21.93,0.3,33.19-26.67H1083.37z"
          />
          <text
            transform="matrix(0.6428 -0.766 0.766 0.6428 964.7789 564.9047)"
            class="st5 st6"
          >
            Jimmie Lane
          </text>
          <polygon
            class="5thSt"
            fill="#6D6E71"
            points="624.99,804.11 470.86,776.85 470.89,788.11 618.63,812.18 945.59,1049.43 960.56,1049.34 	"
          />
          <polygon
            class="st15"
            fill="#6D6E71"
            points="907.11,259.56 911.78,254 917.44,259.56 916,46.62 907.11,46.65 	"
          />
          <polygon
            class="st15"
            fill="#6D6E71"
            points="460.56,39.22 461.89,1066.33 470.86,1066.33 470.86,39.22 	"
          />
          <path
            class="st15"
            fill="#6D6E71"
            d="M522.33,1056.56h-51.47v9.78l442.48-6.67c0,0,77.88-4.89,142.33-3.11c0,0,119.56-52.44,172-113.78
		l239.11-108.44l-0.89-798.22l-995.03,3.11v9.33l436.25-1.91l8.89-0.03l540.56-0.73l0.89,781.78l-236.89,106.67
		c0,0-26.67,50.67-167.11,112.89l-80.89,2.06h-10.78l-16.19,0.15L522.33,1056.56z"
          />
          <text transform="matrix(1 0 0 1 634.2073 30.8706)" class="st5 st6">
            10th St NE
          </text>
          <text transform="matrix(0 1 -1 0 445.833 397.1755)" class="st5 st6">
            5th Ave NE
          </text>
          <text transform="matrix(1 0 0 1 678.0014 905.5726)" class="st5 st6">
            5th St NE
          </text>
          <text transform="matrix(1 0 0 1 634.2076 1049.432)" class="st5 st6">
            3rd St NE
          </text>
          <text transform="matrix(1 0 0 1 1291.4069 874.8651)" class="st5 st6">
            3rd St NE
          </text>
          <text transform="matrix(0 1 -1 0 1438.5371 614.8368)" class="st5 st6">
            12th Ave NE
          </text>
          <text transform="matrix(0 1 -1 0 1438.5371 190.626)" class="st5 st6">
            12th Ave NE
          </text>
          <text transform="matrix(1 0 0 1 1148.7589 30.8707)" class="st5 st6">
            10th St NE
          </text>
          <text transform="matrix(0 1 -1 0 892.085 142.8795)" class="st5 st6">
            8th Ave NE
          </text>
          <path
            class="northUniversityDrive"
            fill="#2E3192"
            d="M502.63,327.07c0,0,25.48-103.7,84.15-24.3l46.93-49.19l140.03-9.48l-29.04,29.04l76.82,75.26L911.78,254
		l165.37,180.04l379.85,2.07l0.01,8.59H1073l-91.56-99.26l-6.22-6.81l-62.94-69.93l-90.76,93.33l-90.94-89.48l17.38-16.59
		l-111.41,7.7L585,319.37c0,0-44.56-89.61-74.73,12.38l-3.79-4.68H502.63z"
          />
          <text
            transform="matrix(0.6805 0.7327 -0.7327 0.6805 938.233 276.1639)"
            class="st5 st6"
          >
            North University Drive
          </text>
          <text transform="matrix(1 0 0 1 1156.7047 429.3956)" class="st5 st6">
            North University Drive
          </text>
        </g>
      </svg>
    </div>
  );
};

export default UjMap;

import React from "react";
import { useState } from "react";

import SorknessFloorToggle from "../ui/sorknessfloorToggle";
import Floor1 from "../buildings/sorknessbuilding/floor1";
import Floor2 from "../buildings/sorknessbuilding/floor2";
import Floor3 from "../buildings/sorknessbuilding/floor3";
import Floor4 from "../buildings/sorknessbuilding/floor4";

import "../assets/building.css";

const Reiland = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor1 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor1") {
    enteredFloor = <Floor1 />;
  } else if (floor === "floor2") {
    enteredFloor = <Floor2 />;
  } else if (floor === "floor3") {
    enteredFloor = <Floor3 />;
  } else {
    enteredFloor = <Floor4 />;
  }

  return (
    <div className="building">
      <h1 className="building-map-title">
        Sorkness Center
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <SorknessFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default Reiland;

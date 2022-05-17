import React from "react";
import { useState } from "react";

import FossFloorToggle from "../ui/fossfloorToggle";
import Floor1 from "../buildings/fossbuilding/floor1";
import "../assets/building.css";

const Foss = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor1 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor1") {
    enteredFloor = <Floor1 />;
  }

  return (
    <div className="building">
      <h1 className="building-map-title">
        Foss Wellness Center
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <FossFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default Foss;

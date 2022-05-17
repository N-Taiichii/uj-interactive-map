import React from "react";
import { useState } from "react";

import ReilandFloorToggle from "../ui/reilandfloorToggle";
import Floor1 from "../buildings/reilandbuilding/floor1";

import "../assets/building.css";

const Reiland = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor1 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor1") {
    enteredFloor = <Floor1 />;
  } else {
    enteredFloor = "floor 2";
  }

  return (
    <div className="building">
      <h1 className="building-map-title">
        Reiland Fine Arts Center
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <ReilandFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default Reiland;

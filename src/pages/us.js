import React from "react";
import { useState } from "react";

import USFloorToggle from "../ui/usfloorToggle";
import Floor1 from "../buildings/usbuilding/floor1";
import Floor2 from "../buildings/usbuilding/floor2";

import "../assets/building.css";

const US = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor1 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor1") {
    enteredFloor = <Floor1 />;
  } else {
    enteredFloor = <Floor2 />;
  }

  return (
    <div className="building">
      <h1 className="building-map-title">Unruh and Sheldon Center</h1>
      <a href="/" id="HomeButton">
        Home
      </a>
      <USFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default US;

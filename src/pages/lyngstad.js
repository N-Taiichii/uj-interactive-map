import React from "react";
import { useState } from "react";

import LyngstadFloorToggle from "../ui/lyngstadfloorToggle";
import Floor2 from "../buildings/lyngstadbuilding/floor2";

import "../assets/building.css";

const Orlady = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor2 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor2") {
    enteredFloor = <Floor2 />;
  }

  return (
    <div className="building">
      <h1 className="building-map-title">
        Lyngstad Center
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <LyngstadFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default Orlady;

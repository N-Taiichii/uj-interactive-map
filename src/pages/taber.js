import React from "react";
import { useState } from "react";

import Floor2 from "../buildings/taberbuilding/floor2";
import TaberFloorToggle from "../ui/taberfloorToggle";

import "../assets/building.css";

const US = () => {
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
        Taber Hall
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <TaberFloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default US;

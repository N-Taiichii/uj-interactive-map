import React from "react";
import { useState } from "react";

import OrladyMckThfloorToggle from "../ui/orlady-mckthfloorToggle";
import Floor1 from "../buildings/Orlady-MckThbuilding/floor1";
import Floor2 from "../buildings/Orlady-MckThbuilding/floor2";
import Floor3 from "../buildings/Orlady-MckThbuilding/floor3";

import "../assets/building.css";

const Orlady = () => {
  let enteredFloor;

  const [floor, setFloor] = useState(<Floor1 />);

  const selectFloorHandler = (selectedFloor) => {
    setFloor(selectedFloor);
  };

  if (floor === "floor1") {
    enteredFloor = <Floor1 />;
  } else if (floor === "floor2") {
    enteredFloor = <Floor2 />;
  } else {
    enteredFloor = <Floor3 />;
  }

  return (
    <div className="building">
      <h1 className="building-map-title">
        Orlady Hall and Mckenna-Thielsch Center
        <a href="/" id="HomeButton">
          Home
        </a>
      </h1>
      <OrladyMckThfloorToggle onSelectFloor={selectFloorHandler} />
      {enteredFloor}
    </div>
  );
};

export default Orlady;

import React from "react";
import { useState } from "react";

import RoomToggle from "../../ui/roomToggle";
import ClassList from "../../components/classList";

import "../../assets/rooms.css";

const Room122 = () => {
  const [day, setDay] = useState("MONDAY");

  const selectDayHandler = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <div className="room-container">
      <div className="room-title">Room 122</div>
      <RoomToggle onSelectDay={selectDayHandler} />
      <ClassList items={day} room="FOSS 122" />
    </div>
  );
};

export default Room122;

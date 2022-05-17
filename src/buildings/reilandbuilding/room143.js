import React from "react";
import { useState } from "react";

import RoomToggle from "../../ui/roomToggle";
import ClassList from "../../components/classList";

import "../../assets/rooms.css";

const Room143 = () => {
  const [day, setDay] = useState("MONDAY");

  const selectDayHandler = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <div className="room-container">
      <div className="room-title">Room 143</div>
      <RoomToggle onSelectDay={selectDayHandler} />
      <ClassList items={day} room="ARTS 143" />
    </div>
  );
};

export default Room143;

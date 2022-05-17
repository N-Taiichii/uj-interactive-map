import React from "react";
import { useState } from "react";

import RoomToggle from "../../ui/roomToggle";
import ClassList from "../../components/classList";

import "../../assets/rooms.css";

const Room101A = () => {
  const [day, setDay] = useState("MONDAY");

  const selectDayHandler = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <div className="room-container">
      <div className="room-title">Room 101A</div>
      <RoomToggle onSelectDay={selectDayHandler} />
      <ClassList items={day} room="SORK 101A" />
    </div>
  );
};

export default Room101A;

import React from "react";
import { useState } from "react";

import RoomToggle from "../../ui/roomToggle";
import ClassList from "../../components/classList";

import "../../assets/rooms.css";

const Room201B = () => {
  const [day, setDay] = useState("MONDAY");

  const selectDayHandler = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <div className="room-container">
      <div className="room-title">Room 201B</div>
      <RoomToggle onSelectDay={selectDayHandler} />
      <ClassList items={day} room="SORK 201B" />
    </div>
  );
};

export default Room201B;

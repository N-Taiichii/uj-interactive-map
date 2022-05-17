import React from "react";
import { useState } from "react";

import RoomToggle from "../../ui/roomToggle";
import ClassList from "../../components/classList";

import "../../assets/rooms.css";

const Auditorium = () => {
  const [day, setDay] = useState("MONDAY");

  const selectDayHandler = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <div className="room-container">
      <div className="room-title">Auditorium</div>
      <RoomToggle onSelectDay={selectDayHandler} />
      <ClassList items={day} room="AUDIT" />
    </div>
  );
};

export default Auditorium;

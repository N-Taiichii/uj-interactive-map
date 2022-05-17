import * as React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RoomToggle = (props) => {
  const [day, setDay] = useState("MONDAY");

  const dayHandler = (event) => {
    setDay(event.target.value);
  };

  props.onSelectDay(day);

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={day}
      onChange={dayHandler}
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "-10px",
      }}
    >
      <ToggleButton value="MONDAY" style={{ width: "150px" }}>
        Monday
      </ToggleButton>
      <ToggleButton value="TUESDAY" style={{ width: "150px" }}>
        Tuesday
      </ToggleButton>
      <ToggleButton value="WEDNESDAY" style={{ width: "150px" }}>
        Wednesday
      </ToggleButton>
      <ToggleButton value="THURSDAY" style={{ width: "150px" }}>
        Thursday
      </ToggleButton>
      <ToggleButton value="FRIDAY" style={{ width: "150px" }}>
        Friday
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RoomToggle;

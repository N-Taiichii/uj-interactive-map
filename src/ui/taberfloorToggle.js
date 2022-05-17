import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const TaberFloorToggle = (props) => {
  const [floor, setFloor] = React.useState("floor2");

  const handleChange = (event) => {
    setFloor(event.target.value);
  };

  props.onSelectFloor(floor);

  return (
    <ToggleButtonGroup
      color="primary"
      value={floor}
      id="floorToggle-group"
      exclusive
      onChange={handleChange}
      style={{ margin: "10px" }}
    >
      <ToggleButton
        value="floor2"
        id="floorToggle-item"
        style={{
          width: "200px",
          height: "75px",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Floor 2
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TaberFloorToggle;

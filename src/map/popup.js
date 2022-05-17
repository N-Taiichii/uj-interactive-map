import React from "react";

import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h1 className="popup-name">{props.name}</h1>
      </div>
    </div>
  );
};

export default Popup;

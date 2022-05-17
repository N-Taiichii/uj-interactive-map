import React from "react";

import "./classItem.css";

const ClassItem = (props) => {
  return (
    <div className="class-item-container">
      <ul className="class-list">
        <li className="class-name">{props.name}</li>
        <li className="class-course">{props.course}</li>
        <li className="class-section">{props.section}</li>
        <li className="class-duration">
          {props.startTime} - {props.endTime}
        </li>
      </ul>
    </div>
  );
};

export default ClassItem;

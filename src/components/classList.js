import React from "react";

import { UJCLASSES } from "../assets/CLASSES";
import ClassItem from "./classItem";

import "./classList.css";

const ClassList = (props) => {
  const sortedClasses = []
    .concat(UJCLASSES)
    .sort((classA, classB) =>
      classA.start_time.slice(0, 2) > classB.start_time.slice(0, 2) ? 1 : -1
    );

  return (
    <div className="classList-container">
      {sortedClasses
        .filter(
          (classes) =>
            classes.room === props.room && classes.days.includes(props.items)
        )
        .map((filteredClasses) => (
          <ClassItem
            name={filteredClasses.name}
            course={filteredClasses.course}
            section={filteredClasses.section}
            days={filteredClasses.days}
            startTime={filteredClasses.start_time}
            endTime={filteredClasses.end_time}
            array={filteredClasses}
          />
        ))}
    </div>
  );
};

export default ClassList;

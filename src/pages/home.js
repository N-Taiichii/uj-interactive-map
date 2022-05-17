import React from "react";

import BuildingMenu from "../buildings/buildingMenu";
import UjMap from "../map/ujMap";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="map-container">
        <h1 className="map-title">UJ Campus Map</h1>
        <UjMap />
      </div>
      <div className="menu-container">
        <h1 className="menu-title">Classrooms on Campus</h1>
        <BuildingMenu />
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";

import "./buildingMenu.css";

const BuildingMenu = () => {
  return (
    <div className="buildingMenu-container">
      <nav className="buildingMenu-nav">
        <ul className="buildingMenu-list">
          <li className="buildingMenu-item">
            <Link to="/foss-wellness-center">Foss Wellness Center</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/taber-hall">Taber Hall</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/lyngstad-center">Lyngstad Center</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/mckenna-thielsch-center">Mckenna Thielsch Center</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/orlady-hall">Orlady Hall</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/reiland-fine-arts-center">Reiland Fine Arts Center</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/sorkness-center">Sorkness Center</Link>
          </li>
          <li className="buildingMenu-item">
            <Link to="/unruh-sheldon-center">Unruh Sheldon Center</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BuildingMenu;

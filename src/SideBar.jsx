import Videos from "./Videos";
import { Link } from "react-router-dom";
import "./SideBar.css";

export function SideBar() {
  return (
    <div className="side-bar">
      <Link to="/home">
        <img src="iconmonstr-home-thin.svg"></img>
      </Link>

      <Link to="/Videos">
        <img src="iconmonstr-heart-thin.svg"></img>
      </Link>
      <Link to="/Channel">
        <img src="add-user.png"></img>
      </Link>
    </div>
  );
}

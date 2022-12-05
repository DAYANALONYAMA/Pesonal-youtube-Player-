import { Link, NavLink } from "react-router-dom";
import "./styleCss//SideBar.css";
import { AiFillHome, AiTwotoneLike } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";

export function SideBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <div className="side-bar">
        {/* <div className={(nav) => (nav.isActive ? "is_active" : "")}> */}
        <NavLink to="/home" className="link">
          <AiFillHome className="icon" />
          <h1>Home</h1>
        </NavLink>

        <NavLink to="/Videos" className="link">
          <AiTwotoneLike className="icon" />
          <h1>Liked</h1>
        </NavLink>
        <NavLink to="/Channel" className="link">
          <MdSubscriptions className="icon" />
          <h1>Channel</h1>
        </NavLink>
        <div className="img-name">
          <img src={user?.profileImg} alt="" />
          <p>{user?.name} </p>
        </div>
      </div>

      <div className="mobile-side">
        <NavLink to="/home" className="link">
          <AiFillHome className="icon" />
        </NavLink>

        <NavLink to="/Videos" className="link">
          <AiTwotoneLike className="icon" />
        </NavLink>
        <NavLink to="/Channel" className="link">
          <MdSubscriptions className="icon" />
        </NavLink>
        <img className="img-user" src={user?.profileImg} alt="" />
      </div>
    </>
  );
}

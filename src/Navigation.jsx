import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>

      <NavLink
        to="/Videos"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
      <NavLink
        to="/VideosPlaying"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
      <NavLink
        to="/Channel"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
      <NavLink
        to="/VideosChannel"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
      <NavLink
        to="/Home"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
      <NavLink
        to="/searchResul"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
    </>
  );
};

export default Navigation();

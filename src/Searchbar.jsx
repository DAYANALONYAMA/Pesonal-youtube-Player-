import Videos from "./Videos";
import "./Header.css";
import { GoogleLogout } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gapi, loadAuth2 } from "gapi-script";

// import { Link } from "react-router-dom";

const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";

export function Searchbar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const accessToken = sessionStorage.getItem("");
  const profileImg = JSON.parse(sessionStorage.getItem("profilImage"));
  console.log(profileImg);
  const itemImg = localStorage.getItem("item");
  console.log(itemImg);
  const handChange = (event) => {
    setInput(event.target.value);
  };
  console.log(input);
  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      // setUser(null);
      console.log("User signed out.");
      localStorage.removeItem("token");
      navigate("/");
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResul/${input}`);
  };

  return (
    <>
      <div className="container-header-liked">
        <nav className="navbar">
          <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img className="logo" src="" />
          <div className="search-box">
            <form onSubmit={onSubmit}>
              <input
                onChange={handChange}
                type="text"
                placeholder="Search"
                className="search-bar"
              />

              <button
                className="search-btn"
                type="submit"
                // onClick={() => signOut()}
              >
                <img src="/magnifying-glass-solid.svg" />
              </button>
            </form>
          </div>
          <div className="user-dp">
            <img src={profileImg} alt="" />
          </div>

          <div onClick={() => signOut()}>
            <button>Logout</button>
          </div>
        </nav>
      </div>
    </>
  );
}

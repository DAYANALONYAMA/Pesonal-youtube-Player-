import Videos from "./Videos";
import "./styleCss//Header.css";
import { GoogleLogout } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gapi, loadAuth2 } from "gapi-script";
import { AiOutlineSearch } from "react-icons/ai";

// import { Link } from "react-router-dom";

// const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";

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
    <div className="container-header-liked">
      <div className="header-keft">
        {/* <img src="/iconmonstr-menu-thin.svg"></img> */}
        <h1 className="header-logo">TitusSlow</h1>
      </div>
      <div className="header-input">
        <form onSubmit={onSubmit}>
          {/* <div className="input-btn"> */}
          <input
            onChange={handChange}
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
          {/* <button className="search-btn" type="submit"> */}
          <AiOutlineSearch className="icon-search" />
          {/* </button> */}
          {/* </div> */}
        </form>
      </div>

      <img src={profileImg} alt="" />
      {/* </div> */}

      <div onClick={() => signOut()}>
        <button className="logout">Logout</button>
      </div>
      {/* </nav> */}
    </div>
  );
}

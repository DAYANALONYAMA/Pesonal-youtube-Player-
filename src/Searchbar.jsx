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
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
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
        <h1 className="header-logo">TitusSlow</h1>
      </div>
      <div className="header-input">
        <form onSubmit={onSubmit}>
          <input
            onChange={handChange}
            type="text"
            placeholder="Search..."
            className="search-bar"
          />

          <AiOutlineSearch className="icon-search" />
        </form>
      </div>
      {/* <div className="img-name">
        <img src={user?.profileImg} alt="" />
        <p>{user?.name} </p>
      </div> */}

      <div onClick={() => signOut()}>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

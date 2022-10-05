import React from "react";
import "./App.css";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
import { Login } from "./Login";
// import LoginButton from "./Login";
// import LogoutButton from "./Logout";
// import { Videos } from "./Videos";
import { useEffect } from "react";
// import { gapi } from "gapi-script";
import Logout from "./Logout";
const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";

export function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}

      <Login />
      {/* <Logout /> */}
      {/* <LoginButton />
      <LogoutButton /> */}
      {/* <Videos /> */}
    </div>
  );
}

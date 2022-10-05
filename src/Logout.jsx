import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";
function Logout() {
  function onSuccess() {
    console.log(" Logout Successfully");
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSucces={onSuccess}
      />
    </div>
  );
}
export default Logout;

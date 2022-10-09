import React from "react";
import "./App.css";
import { Login } from "./Login";
import { ContentContext } from "./UseContex";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import VideosPlaying from "./VideosPlaying";

const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";

export function App() {
  const [loginState, setLoginState] = useState(false);
  const [imgUrl, setImageUrl] = useState();
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <ContentContext.Provider
        value={{
          loginState,
          setLoginState,
          imgUrl,
          setImageUrl,
          accessToken,
          setAccessToken,
        }}
      >
        <Login />
        <Videos />
        {/* <VideosPlaying /> */}
      </ContentContext.Provider>
    </div>
  );
}

import React from "react";
import "./styleCss/App.css";
import { Login } from "./Login";
import { ContentContext } from "./UseContex";
import { Home } from "./Home";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import VideosPlaying from "./VideosPlaying";
import { Channel } from "./Channel";
import { VideosChannel } from "./VideosChannel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResul from "./SearchResul";
import Comments from "./Comments";
import socketIO from "socket.io-client";
import Like from "./Like";

const socket = socketIO.connect("http://localhost:3002");
console.log(socket);

const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";

export function App() {
  const [loginState, setLoginState] = useState(false);
  const [imgUrl, setImageUrl] = useState();
  const [accessToken, setAccessToken] = useState();
  const [currentComments, setCurrentComments] = useState();

  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }

    gapi.load("client:auth2", start);
  }, []);
  // useEffect(() => {
  //   // const socket = socketIO.connect("http://localhost:3001");
  //   // console.log(socket);
  // }, []);

  const Layout = ({ children }) => {
    return (
      <>
        <div className="app">
          <Header />
          <div className="app-page">{children}</div>
        </div>
      </>
    );
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ContentContext.Provider
          value={{
            loginState,
            setLoginState,
            imgUrl,
            setImageUrl,
            accessToken,
            setAccessToken,
            currentComments,
            setCurrentComments,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />

            <Route path="/videos" element={<Videos />} />
            <Route path="/videosPlaying/:id" element={<VideosPlaying />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/VideosChannel/:id" element={<VideosChannel />} />
            <Route path="/searchResul/:id" element={<SearchResul />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/like" element={<Like />} />
          </Routes>

          {/* <Login />
          <Videos />
          <VideosPlaying /> */}
        </ContentContext.Provider>
      </BrowserRouter>
    </div>
  );
}

import React from "react";
import "./styleCss/Login.css";
import { GoogleLogin } from "react-google-login";
import { gapi, loadAuth2 } from "gapi-script";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clientId = import.meta.env.VITE_APP_CLIEND_ID;

export const Login = () => {
  const [loged, setloged] = useState(false);
  const [user, setUser] = useState(null);
  const { setAccessToken } = useContext(ContentContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloged(true);
    } else {
      setloged(false);
    }
  });

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        clientId,
        "https://www.googleapis.com/auth/youtube"
      );
      if (auth2.isSignedIn.get()) {
        // auth2.signOut();
        console.log("Signed in");
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById("customBtn"), auth2);
      }
    };
    setAuth2();
  }, []);

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, clientId, "");
        attachSignin(document.getElementById("customBtn"), auth2);
      };
      setAuth2();
    }
  }, [user]);

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setAccessToken(currentUser.xc.access_token);
    setUser({
      name: name,
      profileImg: profileImg,
    });
    navigate("/Home");
  };

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        console.log(googleUser);
        localStorage.setItem("token", googleUser.xc.access_token);
        updateUser(googleUser);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log("User signed out.");
      localStorage.removeItem("token");
      console.log(loged);
    });
  };

  console.log(loged);
  return (
    <>
      <div className="content">
        <div className="container-login">
          <div className="container-text">
            <h1 className="text-welcome">welcome back</h1>
            <h1 className="Titus">TitusSlow</h1>
          </div>
          <div className="Contenair-btn">
            <div
              id="customBtn"
              className="btn-login
      "
            >
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

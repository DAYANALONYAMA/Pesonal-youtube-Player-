import React from "react";
import { GoogleLogin } from "react-google-login";
import { gapi, loadAuth2 } from "gapi-script";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import { useEffect } from "react";
import { useState } from "react";

const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";

export const Login = () => {
  const [loged, setloged] = useState(false);
  const [user, setUser] = useState(null);
  const { setAccessToken } = useContext(ContentContext);
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

  // aaaa

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setAccessToken(currentUser.xc.access_token);
    setUser({
      name: name,
      profileImg: profileImg,
    });
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

  // if (user) {
  //   return (
  //     <div className="container">
  //       <UserCard user={user} />
  //       <div id="" className="btn logout" onClick={signOut}>
  //         Logout
  //       </div>
  //     </div>
  //   );
  // }

  // Ahh
  console.log(loged);
  return (
    <div className="container">
      <div
        id="customBtn"
        className="btn
      "
      >
        <button>Login</button>
      </div>
      <div id="customBtn" className="btn logout" onClick={() => signOut()}>
        <button>Logout</button>
      </div>
    </div>
  );
};

// function Login() {
//   const clientId =
//     "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";
//   const onSuccess = (res) => {
//     console.log("LOGIN SUCESS! current user:", res.profileObj);
//   };
//   const onFailure = (res) => {
//     console.log("Login FAILEDI! res:", res);
//   };
//   return (
//     <div id="signInButton">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={"single_host_origin"}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }
// export default Login;

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId =
  "75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="75561947803-50o77b5j1s3e3g8p84fmhln95d7da99u.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

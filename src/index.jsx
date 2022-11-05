import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="{import.meta.env.VITE_APP_CLIEND_ID}">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./store/user-context";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>,
  document.getElementById("root")
);

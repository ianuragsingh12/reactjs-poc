import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import MessageContainer from "./poc1/MessageContainer.jsx";
// import App2 from "./poc2/App2.jsx";
// import App1 from "./poc3/App1.jsx";
import App23 from "./poc23/App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App23 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

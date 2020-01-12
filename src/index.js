import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Poc from "./poc1/MessageContainer.jsx"; //component communication
// import Poc from "./poc2/App2.jsx"; // select checkbox_new
// import Poc from "./poc23/App.jsx"; // selet checkbox_old
// import Poc from "./poc3/App1.jsx"; //PropTypes should be installed
// import Poc from "./poc4/App4.jsx"; //API calling. not working

// import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Poc />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

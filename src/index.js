import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import App from "./components/App/index";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

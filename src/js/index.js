//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// your own components
// previous component in boilerplate import { Home } from "./component/home.js";
function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="calendar">
				<i className="far-fa-clock" />
			</div>
			<div className="four">0</div>
			<div className="tree">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));

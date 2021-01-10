//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// get our fontawesome imports
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application
function SimpleCounter(props) {
	return (
		<div className="Container">
			<div className="Counter">
				<div className="calendar">
					<FontAwesomeIcon icon={faClock} />
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="tree">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
			<div className="GroupButtons pl-4 pb-3">
				<div
					id="start"
					type="button"
					className="btn btn-dark m-2"
					onClick={start}>
					Start
				</div>
				<div
					id="stop"
					type="button"
					className="btn btn-dark m-2"
					//onClick={stop}
				>
					Stop
				</div>
				<div
					id="reset"
					type="button"
					className="btn btn-dark m-2"
					onClick={reset}>
					Reset
				</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
let interval = null;

function reset() {
	counter = 0;
}

function start() {
	if (counter == 0) {
		//document.getElementById("start").classList.add("disabled");
		interval = setInterval(function() {
			const four = Math.floor(counter / 10000);
			const three = Math.floor(counter / 1000);
			const two = Math.floor(counter / 100);
			const one = Math.floor(counter / 10);
			counter++;

			//render your react application
			ReactDOM.render(
				<SimpleCounter
					digitOne={one}
					digitTwo={two}
					digitThree={three}
					digitFour={four}
				/>,
				document.querySelector("#app")
			);
		}, 100);
	}
}

/*function stop() {
	//remove class disabled
	document.getElementById("start").classList.remove("disabled");
	clearInterval(interval);
}*/

start();

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

//render simple counter application
function SimpleCounter(props) {
	//html
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
		</div>
	);
}
//props
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
//counter to 0
let counter = 0;
let interval = null;
let timerstarted = false;

//function for stop button
function stop() {
	clearInterval(interval);
}

//This function is called from the "start" button and when the page is loaded
function start() {
	//	if (counter == 0) {
	interval = setInterval(function() {
		const four = Math.floor(counter / 10000);
		const three = Math.floor(counter / 1000);
		const two = Math.floor(counter / 100);
		const one = Math.floor(counter / 10);
		counter++;

		ReactDOM.render(
			<>
				<SimpleCounter
					digitOne={one}
					digitTwo={two}
					digitThree={three}
					digitFour={four}
				/>
				{/* aunque finalmente no se use esto nos permitiria que start y stop se intercanviaran e hicieran distas funciones */}
				<div className="GroupButtons pl-5 pb-3">
					{timerstarted && (
						<div
							id="start"
							type="button"
							className="btn btn-dark m-2"
							onClick={() => {
								start();
								timerstarted = !timerstarted;
							}}>
							Start
						</div>
					)}
					{!timerstarted && (
						<div
							id="stop"
							type="button"
							className="btn btn-dark m-2"
							onClick={() => {
								clearInterval(interval);
								timerstarted;
							}}>
							Stop
						</div>
					)}

					<div
						id="resume"
						type="button"
						className="btn btn-dark m-2"
						onClick={start}>
						Resume
					</div>
				</div>
			</>,
			document.querySelector("#app")
		);
	}, 100);
	//}
}

start();

//

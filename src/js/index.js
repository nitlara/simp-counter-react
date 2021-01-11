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
let timerstarted = true;

//function for reset button
function reset() {
	counter = 0;
}

//This function is called from the "start" button and when the page is loaded
function start() {
	//	if (counter == 0) {
	console.log(document.getElementById("start"), "Aquí");
	interval = setInterval(function() {
		const four = Math.floor(counter / 10000);
		const three = Math.floor(counter / 1000);
		const two = Math.floor(counter / 100);
		const one = Math.floor(counter / 10);
		counter++;
		//startdisabled = "btn btn-dark m-2 disabled";

		//render your react application
		//pausa no es cierta entoces renderiza span                             de lo contrario renderiza este
		/*	{
			!timerstarted && (
				<span>
					{" "}
					<b>Play</b> /Paused{" "}
				</span>
			);
		}
		{
			pause && (
				<span>
					{" "}
					Play/ <b>Paused</b>{" "}
				</span>
			);
		}*/
		ReactDOM.render(
			<>
				<SimpleCounter
					digitOne={one}
					digitTwo={two}
					digitThree={three}
					digitFour={four}
				/>
				<div className="GroupButtons pl-4 pb-3">
					{/* control k c // control k u */}
					{timerstarted && (
						<div
							id="start"
							type="button"
							className="btn btn-dark m-2"
							disabled={true}
							onClick={() => {
								start;
								timerstarted = !timerstarted;
								console.log(timerstarted);
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
								stop;
								timerstarted = !timerstarted;
								console.log(timerstarted);
							}}>
							Stop
						</div>
					)}
					<div
						id="reset"
						type="button"
						className="btn btn-dark m-2"
						onClick={reset}>
						Reset
					</div>
				</div>
			</>,
			document.querySelector("#app")
		);
	}, 100);
	//}
}

function stop() {
	//remove class disabled
	//document.getElementById("start").classList.remove("disabled");
	clearInterval(interval);
	//si función stop puede ser la misma pero sin aññadir counter++;
}

start();

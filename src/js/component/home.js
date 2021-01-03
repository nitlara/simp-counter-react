import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Card from "./component/Card.jsx";

ReactDOM.render(<Card />, document.querySelector("#root"));

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and fill
					the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

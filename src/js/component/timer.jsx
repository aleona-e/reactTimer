import React from "react";
import propTypes from "prop-types";

export const Timer = (props) => {
	let digitFour = Math.floor(props.currentSecs / 1000) % 10;
	let digitThree = Math.floor(props.currentSecs / 100) % 10;
	let digitTwo = Math.floor(props.currentSecs / 10) % 10;
	let digitOne = Math.floor(props.currentSecs / 1) % 10;
	return (
		<div className="container bg-dark text-light">
			<div className="card-group">
				<div className="card bg-dark text-center">
					<i className="bi bi-alarm-fill"></i>
				</div>
				<div className="card bg-dark text-center">{digitFour}</div>
				<div className="card bg-dark text-center">{digitThree}</div>
				<div className="card bg-dark text-center">{digitTwo}</div>
				<div className="card bg-dark text-center">{digitOne}</div>
			</div>
		</div>
	);
};
Timer.PropTypes = {
	currentSecs: propTypes.number,
};

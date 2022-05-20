import React from "react";
import { Timer } from "./timer.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<Timer currentSecs={props.currentSecs} />
		</div>
	);
};

export default Home;

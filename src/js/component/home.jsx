import React from "react";
import { Navbar } from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jombotron } from "./jombotron.jsx";
import { Cards } from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
		<Navbar />
		<div className="text-center"> 
			<Jombotron/>
			<Cards/>
			</div>
			
		</div>
	);
};

export default Home;

import React from "react";
import { Navbar } from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jombotron } from "./jombotron.jsx";
import { Cards } from "./cards.jsx";
import {Footer} from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
		<Navbar />
		<div className="standardSize mx-auto"> 
			<Jombotron/>
			<div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			</div>
			</div>
			<Footer/>
		</div>
		
	);
};

export default Home;

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Cards = () => {
	return (
		
    <div className="card cardSizing mx-2">
    <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="card-footer">
      <a href="#" className="btn btn-primary">Call To Action</a>
      </div>
    </div>
  </div>
  

  


);
};



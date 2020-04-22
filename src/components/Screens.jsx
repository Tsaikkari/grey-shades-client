import React from "react";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";

// TODO: create onclick function

function Screens() {
  return (
    <div className="container-fluid" id="black-n-white-screen">
      <button className="btn btn-secondary btn-lg" id="move-div">They say</button>
      <h1>Get to know about colorful lives</h1>
      <Boxes />
      <Greysgrid />
    </div>
  );
}

export default Screens;

import React from "react";

function Boxes() {
  return (
    <div className="container-fluid" id="black-n-white-screen">
      <div className="main-header">
        <button className="btn btn-secondary btn-lg" id="move-div">They say</button>
        <h1>Get to know about colorful lives</h1>
      </div>
      <div className="container">
        <div className="row" id="two-divs-screen">
          <div className="black col-lg-6 col-md-6 ml-auto mr-auto">
            <p id="left">LIFE IS NOT</p>
          </div>
          <div className="white col-md-6 ml-auto mr-auto">
          <p id="right">BLACK</p>
          <p className="and">&</p>
          <p className="wht">WHITE</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Boxes;
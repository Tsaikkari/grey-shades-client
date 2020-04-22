import React from "react";

// TODO: Add animation

function Boxes() {
  return (
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
  );
}

export default Boxes;
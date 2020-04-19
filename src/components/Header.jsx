import React from "react";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";

// TODO: create onclick function

var showBoxes = "false";

function Header(props) {
  return (
    <div className="container-fluid" id="black-n-white-screen">
      {!props.isHeader && <header>Get to know about colorful lives</header>}
      <button onClick=""className="btn btn-secondary btn-lg" id="move-div">They say</button>
      {props.isClicked && !props.isBoxes ? 
        <Boxes 
          isBoxes={showBoxes}
        /> : <Greysgrid />
      }
    </div>
  );
}

export default Header;


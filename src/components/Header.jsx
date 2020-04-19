import React from "react";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";
import greys from "../greys";

// TODO: create onclick function

var doNotShowBoxes = "true";

function Header(props) {
  return (
    <div className="container-fluid" id="black-n-white-screen">
      {!props.isHeader && <header>Get to know about colorful lives</header>}
      <button onClick=""className="btn btn-secondary btn-lg" id="move-div">They say</button>
      {props.isNotClicked && !props.doNotShowBoxes && <Boxes 
        isBoxes={doNotShowBoxes}
      />}
      {!props.isNotClicked && props.isHeader && <header>Get to know about colorful lives</header> && props.doNotShowBoxes && greys.map(greyLink => (
        <Greysgrid 
          href={greyLink.href}
          name={greyLink.name}
          bgColor={greyLink.bgColor}
        />
      ))}
    </div>
  );
}

export default Header;
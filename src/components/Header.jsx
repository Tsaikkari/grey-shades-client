import React from "react";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";
import greys from "../greys";

// TODO: create onclick function

function Header(props) {
    return (
      <div>
        <header className="container-fluid" id="black-n-white-screen">
          <div className="main-header">
            <button onClick=""className="btn btn-secondary btn-lg" id="move-div">They say</button>
            <Boxes />
            {props.isClicked === true && greys.map(greyLink => (
              <Greysgrid 
              href={greyLink.href}
              name={greyLink.name}
              bgColor={greyLink.bgColor}
            />
            ))}
          </div>
        </header>
      </div>
    );
}

export default Header;
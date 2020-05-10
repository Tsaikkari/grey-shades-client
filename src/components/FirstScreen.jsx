import React from "react";
import { NavLink } from "react-router-dom";

function FirstScreen() {
  return (
    <div>
    <NavLink to="/greys" activeClassName="is-active" exact={true}>THEY SAY</NavLink>
      <div className="container">
        <div className="row" id="two-divs-screen">
          <div className="black s6 ml-auto mr-auto">
            <p id="left">LIFE IS NOT</p>
          </div>
          <div className="white s6 ml-auto mr-auto">
            <p id="right">BLACK</p>
            <p className="and">&</p>
            <p className="wht">WHITE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;




    


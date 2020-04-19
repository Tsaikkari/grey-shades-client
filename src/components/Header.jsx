import React from "react";

// TODO: create onclick function

function Header(props) {
    return (
      <header className="container-fluid" id="black-n-white-screen">
        <div className="main-header">
          {props.isClicked === true && <button onClick=""className="btn btn-secondary btn-lg" id="move-div">They say</button>}
        </div>
      </header>
    );
}

export default Header;
import React, { useState } from "react";
import FirstScreen from "./FirstScreen";
import GreysGrid from "./GreysGrid";

function Action() {
  let [showOnScreen, setShowOnScreen] = useState(false);

  function switchScreen() {
    setShowOnScreen(true);
    document.getElementById('two-divs-screen').style.display = "none";
  }
    return (
        <div>
      <FirstScreen />
      <div className="container-fluid" id="black-n-white-screen">
        <button onClick={switchScreen} className="btn btn-secondary btn-lg" id="move-div">
          THEY SAY
        </button>
        {showOnScreen && <GreysGrid />}
      </div>
    </div>
    );
}

export default Action;
import React from "react";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";

var buttonIsClicked = "true";

function App() {
  return <div>
    <Boxes 
        isClicked={buttonIsClicked}
    />
    <Greysgrid
    />
    </div>
}

export default App;
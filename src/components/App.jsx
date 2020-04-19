import React from "react";
import Header from "./Header";

var showHeader = "true";
var buttonIsClicked = "true";

function App() {
  return (
    <div>
      <Header 
        isHeader={showHeader}
        isClicked={buttonIsClicked}
      />
    </div>
  );
} 

export default App;
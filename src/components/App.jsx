import React from "react";
import Header from "./Header";

var buttonIsNotClicked = "true";
var showHeader = "false";

function App() {
  return (
    <div>
      <Header 
        isHeader={showHeader}
        isNotClicked={buttonIsNotClicked}
      />
    </div>
  );
} 

export default App;
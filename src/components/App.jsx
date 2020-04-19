import React from "react";
import Header from "./Header";

var showHeader = "false";
var buttonIsNotClicked = "true";

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
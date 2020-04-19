import React from "react";
import Header from "./Header";

var buttonIsClicked = "true";

function App() {
  return (
    <div>
      <Header 
          isClicked={buttonIsClicked}
      />
    </div>
  );
} 

export default App;
import React from "react";
import Header from "./Header";
import Boxes from "./Boxes";
import Greysgrid from "./Greysgrid";
import greys from "../greys";

var buttonIsClicked = "true";

function App() {
  return (
    <div>
      <Header />
      <Boxes 
        isClicked={buttonIsClicked}
      />
      {greys.map(greyLink => (
        <Greysgrid 
          href={greyLink.href}
          name={greyLink.name}
          bgColor={greyLink.bgColor}
        />
      ))}
    </div>
  );
} 

export default App;
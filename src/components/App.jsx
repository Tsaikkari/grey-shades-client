import React from "react";
import Screens from "./Screens";
import greys from "../greys";
import Greys from "./Greys";

function App() {
  return (
  <div>
    <Screens />
    {greys.map((grey) => {
      return <Greys
      key={grey.id}
      id={grey.id}
      title={grey.name}
      href={grey.href}
      bgColor={grey.backgroundColor}
      />
    })}
  </div>
  );
}

export default App;

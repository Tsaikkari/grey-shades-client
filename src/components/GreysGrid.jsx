import React from "react";
import Grey from "./Grey";
import greys from "../greys";

function GreysGrid() {
  return (
    <div>
      <h1>Get to know about colorful lives</h1>
        <div className="greys-grid-screen">
          <div className="row" id="grey">
            <div className="l12">
            {greys.map((grey) => {
              return <Grey  
                key={grey.id}
                id={grey.id}
                title={grey.name}
                href={grey.href}
                bgColor={grey.backgroundColor}
              />
            })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default GreysGrid;

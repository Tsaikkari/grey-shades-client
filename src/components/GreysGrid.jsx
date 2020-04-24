import React from "react";
import greys from "../greys";
import Greys from "./Greys";

function GreysGrid() {
  let greysgrid = false;
  return (
    <div>
      {greysgrid && (
        <div className="greys-grid-screen">
          <div className="row" id="grey">
            <div className="l12">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default GreysGrid;
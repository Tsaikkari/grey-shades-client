import React from "react";

let greysgrid = false;

const switchScreen = () => {
    greysgrid = !greysgrid;
    //TODO: render
}

function Action() {
  return (
    <div className="container-fluid" id="black-n-white-screen">
      <button onClick={switchScreen} className="btn btn-secondary btn-lg" id="move-div">
      {greysgrid ? 'Go back' : 'THEY SAY'}
      </button>
      <div>
        {greysgrid && (
            <h1>Get to know about colorful lives</h1>
        )}
      </div>
    </div>
  );
}

export default Action;

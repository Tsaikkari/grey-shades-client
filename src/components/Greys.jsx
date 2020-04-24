import React from "react";

function Greys(props) {
  let greysgrid = false;
  
  return (
    <div>
      {greysgrid && (
        <a href={props.href} style={{background: props.bgColor}}>{props.title}</a>
      )}
    </div>
  );
}

export default Greys;
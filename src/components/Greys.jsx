import React from "react";

function Greys(props) {
  return (
    <div>
      <a href={props.href} style={{background: props.bgColor}}>{props.title}</a>
    </div>
  );
}

export default Greys;
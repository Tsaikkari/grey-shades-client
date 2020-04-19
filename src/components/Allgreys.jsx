import React from "react";

function Allgreys(props) {
  return (
    <a style={{background: props.bgColor}} href={props.href}>{props.name}</a>
  );
}

export default Allgreys;
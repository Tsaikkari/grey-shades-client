import React from "react";

function Grey(props) {
  return (
    <div>
      <a href={props.href} style={{background: props.bgColor}}>{props.title}</a>
    </div>
  );
}

export default Grey;
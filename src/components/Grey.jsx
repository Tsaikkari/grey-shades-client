import React from "react";
import Col from 'react-bootstrap/Col';

function Grey(props) {
  return (
    <Col className="greybutton" style={{background: props.bgColor}} lg={1} md={1} sx={4} key={props.id}>
      <a href={props.href}>{props.title}</a>
    </Col>
  );
}

export default Grey;
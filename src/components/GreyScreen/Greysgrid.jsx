import React from "react";
import Allgreys from "./Allgreys";
import greys from "./greys";

// TODO: bgColor prop and react grid

/*function Greysgrid(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </Container>
  );
}*/

function Greysgrid() {
  return (
    <div className="greys-grid-screen" id="second-screen">
      <div id="grey">  
        <div>
        {greys.map(greyLink => (
          <Allgreys 
            key={greyLink.id}
            href={greyLink.href}
            name={greyLink.name}
            bgColor={greyLink.backgroundColor}
            />))}
        </div>
      </div>
    </div>
  );
}

export default Greysgrid;
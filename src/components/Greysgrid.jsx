import React from "react";
import Allgreys from "./Allgreys";
import greys from "../greys";

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

function Greysgrid(props) {
  return (
    <div className="greys-grid-screen">
    {props.isNotClicked && props.isHeader && <header>Get to know about colorful lives</header> && props.doBoxes}
      <div className="row" id="grey">  
        <div className='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto'>
        {greys.map(greyLink => (
          <Allgreys 
            key={greyLink.id}
            href={greyLink.href}
            name={greyLink.name}
            bgColor={greyLink.bgColor}
            />))}
        </div>
      </div>
    </div>
  );
}

export default Greysgrid;
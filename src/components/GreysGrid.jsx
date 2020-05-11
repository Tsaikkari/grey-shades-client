import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Grey from "./Grey";
import greys from "../greys";

function GreysGrid() {
  return (
    <div>
      <h1>Get to know about colorful lives</h1>
      <Container className="greys-grid-screen">
        <Row className="row" id="grey">
          {greys.map((grey) => {
            return (
              <Grey  
                key={grey.id}
                id={grey.id}
                title={grey.name}
                href={grey.href}
                bgColor={grey.backgroundColor}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default GreysGrid;

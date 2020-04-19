import React from "react";

// TODO: bgColor prop

function Greysgrid(props) {
  return (
    <div className="greys-grid-screen">
      <div className="row" id="grey">  
        <div className='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto'>
          <a href={props.href}>{props.name}</a>
        </div> 
      </div>
    </div>
  );
}

export default Greysgrid;